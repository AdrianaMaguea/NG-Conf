import { Component, ElementRef, ChangeDetectorRef, AfterViewInit, HostListener, Input } from '@angular/core';
import { slideInOutVertical } from '../shared/animations/slide-in-out-vertical';
import { spinInOut } from '../shared/animations/spin-in-out';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-page-menu',
  templateUrl: './single-page-menu.component.html',
  styleUrls: ['./single-page-menu.component.scss'],
  animations: [slideInOutVertical, spinInOut]
})
export class SinglePageMenuComponent implements AfterViewInit {

  @Input() externalPage?: boolean;
  currentSection: HTMLElement;
  sections: HTMLElement[];
  settingCurrentSection = false;
  navBar: HTMLElement;
  logo: HTMLElement;
  showMobileNavBar = false;
  mobileMenuState: string;
  currentSectionLabel: string;
  settingUpNavBar = true;
  documentElement: HTMLElement;
  navBarMinWidthRequired: number;
  currentDocumentWidth: number;
  externalLinkElement: HTMLElement;

  constructor(
    private hostElement: ElementRef,
    private changeDetector: ChangeDetectorRef,
    private router: Router,
  ) { }


  ngAfterViewInit(): void {
    this.documentElement = document.documentElement;
    if (!this.externalPage) {
      const children = this.hostElement.nativeElement.parentElement.querySelector('.content').children;
      this.sections = [...children];
    } else {
      this.sections = [];
    }
    this.navBar = this.hostElement.nativeElement.querySelector('.single-page-navigation-bar');
    this.logo = this.hostElement.nativeElement.querySelector('.logo');
    if (this.externalPage) {
      this.setActiveExternalLink();
    }
    this.setMenuButtonsListeners();
    this.getNavBarSetupData();
  }

  setActiveExternalLink() {
    const selector = this.router.url.split('/')[1];
    this.externalLinkElement = (this.hostElement.nativeElement as HTMLElement).querySelector(`.${selector}`);
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
    let targetSelector: string;
    if (this.hostElement.nativeElement.querySelector('.active')) {
      this.hostElement.nativeElement.querySelector('.active').classList.remove('active');
    }
    const navBarLeftPosition = this.navBar.offsetLeft;
    let currentItem: HTMLElement;
    if (this.externalLinkElement) {
      currentItem = this.externalLinkElement;
    } else {
      if (this.currentSection.id.match(/^(description|benefits)$/g)) {
        targetSelector = 'when';
      } else if (this.currentSection.id.match(/^(organizers|collaborators|sponsors)$/g)) {
        targetSelector = 'comunity';
      } else {
        targetSelector = this.currentSection.id;
      }
      currentItem = this.hostElement.nativeElement.querySelector(`[data-target="#${targetSelector}"]`) as HTMLElement;
    }
    if (currentItem) {
      currentItem.classList.add('active');
      this.currentSectionLabel = targetSelector === 'when' ? 'NgConf CO' : currentItem.innerText.toUpperCase();
      // We need to allow some time for view to update and get accurate values.
      setTimeout(() => {
        if (this.settingUpNavBar && !this.showMobileNavBar) {
          this.settingUpNavBar = false;
          this.changeDetector.detectChanges();
        }
        const nativeElement = this.hostElement.nativeElement;
        const calculatedValue = currentItem.offsetLeft - navBarLeftPosition;
        const leftPosition = currentItem.parentElement.classList.contains('logo') ?
          calculatedValue + (currentItem.offsetWidth / 2) - 10 : calculatedValue;
        nativeElement.style.setProperty('--indicator-left-position', `${leftPosition}px`);
        if (!this.showMobileNavBar) {
          const widthToSet = currentItem.parentElement.classList.contains('logo') ? 16 : currentItem.offsetWidth;
          nativeElement.style.setProperty('--indicator-width', `${widthToSet}px`);
        }
      }, 100);
    }
  }

  setMenuButtonsListeners() {
    const menuButtons = this.navBar.querySelectorAll('.single-page-navigation-bar button:not(.external-link)');
    menuButtons.forEach((button: HTMLElement) => {
      button.addEventListener('click', this.scrollToSmoothly);
    });
    this.logo.addEventListener('click', this.scrollToSmoothly);
  }

  toggleMenu(): void {
    this.mobileMenuState = this.mobileMenuState === 'opened' ? 'closed' : 'opened';
  }

  scrollToSmoothly = (event: Event) => {
    if (this.showMobileNavBar && this.mobileMenuState === 'opened') {
      this.toggleMenu();
    }
    const eventTarget = event.target as HTMLElement;
    let eventTrigger = eventTarget.dataset.hasOwnProperty('target') ? eventTarget : eventTarget.parentElement;
    let scrollTarget = eventTrigger.dataset.target;
    if (!scrollTarget) {
      while (!scrollTarget) {
        eventTrigger = eventTrigger.parentElement;
        scrollTarget = eventTrigger.dataset.target;
      }
    }

    if (this.externalPage) {
      this.router.navigate(['/'], { fragment: scrollTarget.split('#')[1] });
    }

    const scrollOptions = {
      top: document.querySelector<HTMLElement>(scrollTarget).offsetTop,
      behavior: 'smooth' as ScrollBehavior,
    };
    window.scrollTo(scrollOptions);
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (this.externalPage) {
      return;
    }
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
