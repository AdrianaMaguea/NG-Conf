import { Component, OnInit, ElementRef, ChangeDetectorRef, AfterViewInit, HostListener } from '@angular/core';
import { slideInOutVertical } from '../shared/animations/slide-in-out-vertical';
import { spinInOut } from '../shared/animations/spin-in-out';

@Component({
  selector: 'app-single-page-menu',
  templateUrl: './single-page-menu.component.html',
  styleUrls: ['./single-page-menu.component.scss'],
  animations: [slideInOutVertical, spinInOut]
})
export class SinglePageMenuComponent implements AfterViewInit {
  currentSection: HTMLElement;
  sections: HTMLElement[];
  settingCurrentSection = false;
  navBar: HTMLElement;
  showMobileNavBar = false;
  mobileMenuState: string;
  currentSectionLabel: string;
  settingUpNavBar = true;
  documentElement: HTMLElement;

  navBarMinWidthRequired: number;
  currentDocumentWidth: number;

  constructor(
    private hostElement: ElementRef,
    private changeDetector: ChangeDetectorRef,
  ) { }


  ngAfterViewInit(): void {
    this.documentElement = document.documentElement;
    const children = this.hostElement.nativeElement.parentElement.querySelector('.content').children;
    this.sections = [...children];
    this.navBar = this.hostElement.nativeElement.querySelector('.single-page-navigation-bar');
    this.setMenuButtonsListeners();
    this.getNavBarSetupData();
  }

  getNavBarSetupData(): void {
    this.navBarMinWidthRequired = this.navBar.getBoundingClientRect().right;
    this.currentDocumentWidth = this.documentElement.getBoundingClientRect().width;
    if (this.documentElement.offsetTop === 0) {
      this.setCurrentSection(0);
    }
    this.initNavBar();
  }

  initNavBar(fromRezise = false): void {
    this.showMobileNavBar = this.navBarMinWidthRequired > this.currentDocumentWidth;
    this.changeDetector.detectChanges();
    if (this.showMobileNavBar) {
      this.mobileMenuState = 'closed';
      // We need to allow some time for view to update and get accurate values.
      setTimeout(() => {
        this.updateSelector();
        this.settingUpNavBar = false;
      }, 500);
    } else {
      this.mobileMenuState = '';
      this.updateSelector();
    }
    if (fromRezise) {
      this.setCurrentSection(this.documentElement.scrollTop);
    }
  }

  setCurrentSection(scrollValue: number, sectionToSet?: HTMLElement) {
    if (sectionToSet) {
      this.currentSection = sectionToSet;
    } else {
      this.currentSection = this.sections.find(
        (child: HTMLElement) => {
          return child.offsetTop <= scrollValue && scrollValue < (child.offsetTop + child.offsetHeight);
        }
      );
    }
    this.updateSelector();
  }

  updateSelector() {
    if (this.navBar.querySelector('.active')) {
      this.navBar.querySelector('.active').classList.remove('active');
    }
    const navBarLeftPosition = this.navBar.offsetLeft;
    const currentItem = this.navBar.querySelector(`[data-target="#${this.currentSection.id}"]`) as HTMLElement;
    currentItem.classList.add('active');
    this.currentSectionLabel = currentItem.innerText;
    // We need to allow some time for view to update and get accurate values.
    setTimeout(() => {
      if (this.settingUpNavBar && !this.showMobileNavBar) {
        this.settingUpNavBar = false;
        this.changeDetector.detectChanges();
      }
      const nativeElement = this.hostElement.nativeElement;
      nativeElement.style.setProperty('--indicator-left-position', `${currentItem.offsetLeft - navBarLeftPosition}px`);
      if (!this.showMobileNavBar) {
        nativeElement.style.setProperty('--indicator-width', `${currentItem.offsetWidth}px`);
      }
    }, 100);
  }

  setMenuButtonsListeners() {
    const menuButtons = this.navBar.querySelectorAll('.single-page-navigation-bar button');
    menuButtons.forEach((button: HTMLElement) => {
      button.addEventListener('click', this.scrollToSmoothly);
    });
  }

  toggleMenu(): void {
    this.mobileMenuState = this.mobileMenuState === 'opened' ? 'closed' : 'opened';
  }

  scrollToSmoothly = (event: Event) => {
    if (this.showMobileNavBar) {
      this.toggleMenu();
    }
    const eventTarget = event.target as HTMLElement;
    const eventTrigger = eventTarget.dataset.hasOwnProperty('target') ? eventTarget : eventTarget.parentElement;
    const scrollTarget = eventTrigger.dataset.target;
    const scrollOptions = {
      top: document.querySelector<HTMLElement>(scrollTarget).offsetTop,
      behavior: 'smooth' as ScrollBehavior,
    };
    window.scrollTo(scrollOptions);
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const documentElement = (event.target as Document).documentElement;
    const currentValue = documentElement.scrollTop;

    if (
      this.currentSection &&
      this.currentSection.offsetTop <= currentValue &&
      currentValue < (this.currentSection.offsetTop + this.currentSection.offsetHeight)
    ) {

      if (
        (documentElement.offsetHeight - window.innerHeight === currentValue) &&
        this.currentSection !== this.sections[this.sections.length - 1]
      ) {
        this.setCurrentSection(NaN, this.sections[this.sections.length - 1]);
      }
      return;
    }

    this.setCurrentSection(currentValue);
  }

  @HostListener('window:resize')
  onResize() {
    const updatedWidth = this.documentElement.getBoundingClientRect().width;

    if (this.currentDocumentWidth === updatedWidth) {
      return;
    }
    this.currentDocumentWidth = updatedWidth;

    if (
      this.showMobileNavBar && this.navBarMinWidthRequired <= updatedWidth ||
      !this.showMobileNavBar && this.navBarMinWidthRequired > updatedWidth
    ) {
      this.initNavBar(true);
    }
  }
}
