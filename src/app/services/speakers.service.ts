import { Injectable } from '@angular/core';


export interface Speaker {
  id: number,
  name: String;
  country: String;
  city: String;
  jobTitle: String;
  company: String;
  bio: String;
  picture: String;
  interventions: Intervention[];
}

export interface Intervention {
    title: String;
    description: String;
    type: String;
    language: String;
    duration: String;
    translation?: String;
}

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {

  speakers: Speaker[] = [
    {
        id: 1,
        name: "Robert Willemelis",
        country: "Germany",
        city: "Berlin",
        jobTitle: "Frontend Developer",
        company: "Strato",
        bio: "Robert works as a Frontend-Developer for a big hosting service provider in Berlin. He is a core team member of ngGirls and passionate about Angular and about the software craftsmanship pattern. He likes to make people happy by being creative, producing new ideas, and bringing people together. Robert loves to travel around and attend conferences to get new inspiration for his daily work and for self-improvement.",
        picture: "robert",
        interventions: [
            {
                title: "~920 Bytes - Creating the smallest Angular Bundle in the world",
                description: "<p>In this talk I will show an experimental idea on how to reduce the bundle size of a simple angular application from 150kb under 1kb by using a code coverage report of (unit-)tests, typescript and learning javascript deeper by deleting lines of code.</p><p>We will discover angular core features and how zone.js, webpack or rjxs affect the bundle size.</p>",
                type: "Lightning talk",
                language: "English",
                duration: '10 Min'
            }
        ]
    },
    {
        id: 2,
        name: "Lupe Canaviri Maydana",
        country: "Bolivia",
        city: "La Paz",
        jobTitle: "Developer Advocate and Digital Artist",
        company: "Laboratoria",
        bio: "Lupe es JS Coach and Developer Advocate en @Laboratoriala. Pythonista de corazón. Ingeniera de software indígena aymara que investiga constantemente ese lugar donde el arte se encuentra con la tecnología. Busca lograr este objetivo a través del desarrollo de proyectos open source y performances (que involucran movimiento corporal, danza, teatro y nuevas tecnologías).",
        picture: "lupe",
        interventions: [
            {
                title: "Become a Job Oriented Learner",
                description: "<p>En esta era del conocimiento aprender es una habilidad muy importante pero muchas veces puedes encontrarte con un montón de información, tecnologías, lenguajes de programación, frameworks de JavaScript, esto puede llegar a ser abrumador, así que en este espacio quiero compartirte tips para aprender con el objetivo de conseguir un trabajo en la industria tech donde tu sientas que aportas valor.</p>",
                type: "Lightning talk",
                language: "Spanish",
                duration: '10 Min'
            }
        ]
    },
    {
        id: 3,
        name: "Azizi Yazit" ,
        country: "Malaysia",
        city: "Kuala Lumpur",
        jobTitle: "AVP, Design System",
        company: "RHB Group",
        bio: "Component developer who loves experimenting with component best practices and patterns. Actively talk on local meetups about design system and component library",
        picture: "azizi",
        interventions: [
            {
                title: "Build Your Next Design System With Angular",
                description: "A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications. In this talk we will go thru building our next design system with Angular.",
                type: "Lightning talk",
                language: "English",
                duration: "10 min"
            }
        ]
    },
    {
        id: 4,
        name: "Pablo Ortuño Salmerón" ,
        country: "Spain",
        city: "Madrid",
        jobTitle: "CTO",
        company: "BuscoExtra",
        bio: "Entrepreneur, passionate about web technologies, building  web products since 2009. My main goal it's to create products that make impact, using all the web capabilities.",
        picture: "Pablo",
        interventions: [
            {
                title: "Integrando WebComponents con ngModel y Reactive Forms",
                description: "Cómo sacarle el máximo partido a los Web Components integrándolos con ngModel y Reactive Forms",
                type: "Lightning talk",
                language: "Spanish",
                duration: "10 min"
            }
        ]
    },
    {
        id: 5,
        name: "Minko Gechev" ,
        country: "United States",
        city: "San Francisco",
        jobTitle: "Senior Developer Programs Engineer",
        company: "Google",
        bio: "Engineer in the Angular team at Google. Co-founder of Rhyme.com, acquired by Coursera.",
        picture: "minko",
        interventions: [
            {
                title: "The State of Angular",
                description: "<p>In this presentation, we’ll look at the current state of Angular and its tooling infrastructure. We’ll discuss what features enabled the latest version of our rendering engine Ivy and how you can take advantage of them today.</p><p>Along the way, we’ll look at the work we did to ensure small bundle size and fast execution! In the second part of the talk, we’ll focus on the tooling that Angular provides to help you deliver apps quickly and efficiently.</p>",
                type: "Full talk",
                language: "English",
                duration: "25 min"
            }
        ]
    },
    {
        id: 6,
        name: "Keilla Fernandes" ,
        country: "Brazil",
        city: "São Paulo",
        jobTitle: "Senior Software Developer Consultant",
        company: "ThoughtWorks",
        bio: "I'm technologist, graduated in Computer Science, with more than 12 years of experience in Software Development. Specialist in front-end applications, I work as developer at ThoughtWorks. I'm speaker, Google Developer Expert in Angular and Web Technologies, and support technology community as a way to democratize technology for all.",
        picture: "keila",
        interventions: [
            {
                title: "Give your Apps Superpowers",
                description: "Services Workers are a feature that gives to web developers the control over the network rather than let the network controls you. This complete changes the user experience, enabling delivery and build wonderful web apps. What are the benefits and challenges when using this feature?",
                type: "Full talk",
                language: "English",
                duration: "25 min"
            }
        ]
    },
    {
        id: 7,
        name: "Jorge Cano" ,
        country: "Argentina",
        city: "Capital Federal",
        jobTitle: "Principal Architect",
        company: "HeroDevs",
        bio: "Después de más de 10 años desarrollando, Jorge es un full stack developer avocado a las tecnologías en javascript. Hoy en dia Jorge trabaja como “principal engineer” en HeroDevs utilizando Angular / RxJS / NodeJS / Firebase y otras tecnologías de punta… Profesor de varios cursos relacionados a javascript, Google Developer Expert en tecnologías web , Angular Developer Expert y Nativescript Developer Expert, speaker internacional, escritor de artículos técnicos y un libro sobre Angular.",
        picture: "cano",
        interventions: [
            {
                title: "Testeando ando",
                description: "<p>Hay dos formas de tesear?</p><p>Haciéndolo o no... en esta charla vamos a ver los principio del testing en Angular, cómo hacerlo y por qué hacerlo. Pero siempre de una forma divertida!</p>",
                type: "Full talk",
                language: "Spanish",
                duration: "25 min"
            }
        ]
    },
    {
        id: 8,
        name: "Martina Kraus" ,
        country: "Germany",
        city: "Leipzig",
        jobTitle: "Self-employed | Google Developer Expert Angular",
        company: "",
        bio: "Martina is a Google Developer Expert in Angular and Web Technologies, as a Senior Frontend developer, she focuses on implementing highly scalable software-solution with Angular. Besides giving workshops as an Angular Trainer, she founded the JavaScript User group, is a core member of the ngGirls Team and organizes the German Angular conference NG-DE.",
        picture: "martina",
        interventions: [
            {
                title: "Component Features - The Post Ivy Release-Time",
                description: "Adjusting Component traits at runtime without using base classes or decorators? Ivy makes it happen: Ivy introduces a new concept called component features - small mixins for components, applied internally by Angular to all components. Furthermore, with Ivy you will be able to lazy load components on runtime without even using Angular modules anymore. During this talk you will get into the development with Ivy and all the benefits using component features instead of decorators.",
                type: "Full talk",
                language: "English",
                duration: "25 min"
            }
        ]
    },
    {
        id: 9,
        name: "Jan-Niklas Wortmann" ,
        country: "Deutschland",
        city: "Willich",
        jobTitle: "Self-Employed Consultant and Developer",
        company: "",
        bio: "Jan-Niklas is an enterprise consultant with vast experience designing and implementing large scaled applications. He has a passion for developing clean and maintainable code, with unparalleled expertise in Angular and reactive programming. Jan-Niklas is also a member of the RxJS Core Team, giving back to the community whenever possible.",
        picture: "jan",
        interventions: [
            {
                title: "Demystifying RxJS Operators",
                description:"<p>RxJS is getting more popular every day. The amount of downloads from the public registry is insane, with around 50 million downloads per month. Everyone that already uses RxJS knows that the added value of RxJS mostly comes from the provided operators. These operators enable us to develop complex scenarios in a fairly comprehensible manner.</p><p> Right now RxJS already provides over 100 different operators and it is also possible to extend this huge list by developing custom operators.</p><p>But wait, do you actually know how operators are internally structured? How is this magic piece of code developed that brings so much power? Everyone uses RxJS operators on a daily bases, but no one really knows about the internals of it! Within this talk, we will take a deep dive into the internals of RxJS to understand how operators are developed. This will first make us understand how these operators work and second enables us to write our own operators to fully embrace the power of RxJS.</p> ",
                type: "Full talk",
                language: "English",
                duration: "25 min"
            }
        ]
    },
    {
        id: 10,
        name: "Carlos Caballero González" ,
        country: "España",
        city: "Málaga",
        jobTitle: "Professor / Fullstack Developer",
        company: "",
        bio: "",
        picture: "carlosc",
        interventions: [
            {
                title: "Scalable Architecture for Angular apps",
                description: "<p>Creating large-scale applications that scale is one of the current challenges of software development.</p><p>The increase in development complexity when dealing with frontend applications has been exponential since the increase in business rules, together with the amount of data that has to be loaded and managed in the frontend. This complexity is what causes the applications to fail when scaling. In fact, the reality is that nowadays development teams are distributed around the world, which causes the development of these applications to reach levels of complexity that can be considered unmanageable.</p><p>Angular is the client-side framework that provides the appropriate architecture so that we can apply different architecture and data flow patterns that will allow us to create scalable client-side applications. To achieve these objectives, the following techniques will be applied:</p><p>Modular design.</p><p>Design patterns that allow abstraction between layers (Facade).</p><p>Data flow pattern (Unidirectional using observables).</p><p>State management.</p><p>Smart / dumb component design pattern (pages / components).</p>",
                type: "Full talk",
                language: "Spanish",
                duration: "25 min"
            }
        ]
    },
    {
        id: 11,
        name: "Patricio Vargas" ,
        country: "United States",
        city: "Jacksonville",
        jobTitle: "Software Engineer",
        company: "",
        bio: "He is a Google Developer Expert on Angular and Web Technologies, Auth0 ambassador and Media Developer Expert at Cloudinary. He has participated in several hackathons and won two of them. He loves mentoring people in technology, writes articles, contributes to open source, speaks at conferences/tech talks, and advocates technologies that he loves",
        picture: "pato",
        interventions: [
            {
                title: "Usando Librerias en un Angular Nx monorepo",
                description: "Cuando trabajamos con aplicaciones al nivel del enterprise nos vamos a ver con la necesidad de usar librerías de Angular  ¿Pero cómo usar las librerías en multiples aplicaciones que viven en un monorepo sin la necesidad de tener las librerías en un repositorio? En esta charla te enseñare como hacer esto.",
                type: "Full talk",
                language: "Spanish",
                duration: "25 min"
            }
        ]
    },
    {
        id: 12,
        name: "Daniel Marin" ,
        country: "Uruguay",
        city: "Montevideo",
        jobTitle: "Senior Software Engineer",
        company: "This Dot Labs",
        bio: "I'm a passionate Angular developer, I'm part of the @angularMVD organization group, where we're constantly setting up events towards helping the latino community get more involved with Angular. ",
        picture: "daniel",
        interventions: [
            {
                title: "Forms everyone can use",
                description: "Almost every webapp has forms, these allow users to interact and provide information. In my experience, is very common to find forms that aren't accessible at all, specially for Screen Reader users. In this session I will teach you what makes a form accessible and how you can build forms everyone can use.",
                type: "Full talk",
                language: "Spanish",
                duration: "25 min"
            }
        ]
    },
    {
        id: 13,
        name: "Alfonso Andrés López Molina" ,
        country: "Colombia",
        city: "Bogotá",
        jobTitle: "Semi Senior Web Engineer",
        company: "Merlin",
        bio: "Desarrollador de Software Venezolano con más de 7 años de experiencia y uso de Angular desde versiones tempranas del desarrollo, con aportes a la comunidad @ngVenezuela y a proyectos como @ngrx/platform, ngx-datatable, ngx-auth, etc.",
        picture: "alfonso",
        interventions: [
            {
                title: "Creación de aplicaciones Angular utilizando Server Side Rendering + Prerendering + i18n",
                description: "<p>Breve paseo del desarrollo de una aplicación Angular lista para ir a producción con el uso de Angular Universal e implementar Server Side Rendering con una estrategia de prerendering, más el soporte de i18n.</p><p>A parte de esto con el uso de un servidor nginx como proxy inverso de la aplicación y una estrategia de micro cache para disminuir el consumo de recursos.</p>",
                type: "Full talk",
                language: "Spanish",
                duration: "25 min"
            }
        ]
    },
    {
        id: 14,
        name: "Natalia Venditto" ,
        country: "Spain",
        city: "Barcelona",
        jobTitle: "Principal Software Engineer / Frontend Architect",
        company: "Netcentric",
        bio: "",
        picture: "natalia",
        interventions: [
            {
                title: "Learn Schematics from 0 to publishing a library",
                description: " <p>Schematics are  Angular and fundamental and integral part of Angular and the Angular CLI, yet I've found out that even very advanced Angular users like Architects have never implemented scaffolding or code generation by using them. In this workshop we will go through a theoretical part where we learn what schematics are and in what dimensions they can help us (standardisation, optimisation, introduction of best practices, reduction of time of manual quality gates)</p><p>After we have learned the theory and reviewed the API, we will write our first blank schematic. We will then write a second schematic and combine it with the first. We will finally combine it all with an Angular CLI schematic.</p><p>To complete the workshop, we will publish the schematic as an npm package and then install it from npm.</p><p>Prerequisites: users must have a GitHub account (or any other public git hosting account), must know git basic commands, must have an NPM account, must know basic npm usage, must be familiar with the Angular CLI and know Angular at a basic level.</p>",
                type: "Workshop",
                language: "Spanish",
                duration: "4 hrs"
            }
        ]
    },
    {
        id: 15,
        name: "Tamas Piros" ,
        country: "United Kingdom",
        city: "London",
        jobTitle: "Developer Evangelist",
        company: "Cloudinary",
        bio: "Tamas is a Google Developer Expert in Web Technologies and a Developer Evangelist. He has more than a decade of experience delivering technical training to large, prestigious organisations. Throughout his career, he has delivered presentations and training classes all over the world. He is passionate about unlocking the latest & greatest features of web development.",
        picture: "tamas",
        interventions: [
            {
                title: "Performant Angular Applications",
                description: "Web Performance is a crucial topic for multiple reasons: a performant application allows better user retention and engagement. There are certain features in Angular that we can enable in order to achieve an application that performs better. During the workshop we’ll take a look at a few techniques and we’ll also spend some time discussing the importance of media (images and videos) and handling them in a performant way in Angular apps.",
                type: "Workshop",
                language: "English",
                duration: "4 hrs"
            }
        ]
    },
    {
        id: 16,
        name: "Luis Aviles" ,
        country: "Bolivia",
        city: "Cochabamba",
        jobTitle: "Software Engineer",
        company: "",
        bio: "Luis Aviles is a Google Developer Expert in Web Technologies and Angular and an enthusiast of Open Source software and communities.  He is a public speaker and he has participated in different international technology conferences and events, giving technical talks, workshops, and various training sessions. He’s the founder of the Angular Bolivia community and the NG Bolivia conference. When he’s not coding, Luis is reading about Astronomy or nerding about outer space, photography, or even doing Astrophotography.",
        picture: "luis",
        interventions: [
            {
                title: "Mastering Angular Forms: Template-Driven vs Reactive Forms",
                description: "<p>Angular allows the definition of forms under two mechanisms: Template-Driven Forms and Reactive Forms.</p><p>In this workshop, we will explain the differences between both approaches in a practical way and we will create our forms from scratch.</p>",
                type: "Workshop",
                language: "Spanish",
                duration: "4 hrs"
            }
        ]
    },
    {
      id: 17,
      name: "Estefanía García Gallardo" ,
      country: "España",
      city: "Madrid",
      jobTitle: "Software Engineer",
      company: "",
      bio: "Estefanía García Gallardo is a full stack software developer from Málaga, organizer of Angular Málaga, contributor to the open source community, author of the Npkill project and advocate of clean code. As member of the WTM community in Malaga, her goal is to empower women in tech. ",
      picture: "alejandra",
      interventions: [
          {
            title: "Scalable Architecture for Angular apps",
              description: "<p>Creating large-scale applications that scale is one of the current challenges of software development.</p><p>The increase in development complexity when dealing with frontend applications has been exponential since the increase in business rules, together with the amount of data that has to be loaded and managed in the frontend. This complexity is what causes the applications to fail when scaling. In fact, the reality is that nowadays development teams are distributed around the world, which causes the development of these applications to reach levels of complexity that can be considered unmanageable.</p><p>Angular is the client-side framework that provides the appropriate architecture so that we can apply different architecture and data flow patterns that will allow us to create scalable client-side applications. To achieve these objectives, the following techniques will be applied:</p><p>Modular design.</p><p>Design patterns that allow abstraction between layers (Facade).</p><p>Data flow pattern (Unidirectional using observables).</p><p>State management.</p><p>Smart / dumb component design pattern (pages / components).</p>",
            type: "Full talk",
            language: "Spanish",
            duration: "25 min"
            }
        ]
    },
    {
      id: 18,
      name: "Aaron Frost" ,
      country: "Estados Unidos",
      city: "Salt Lake City",
      jobTitle: "Expert/Consultant",
      company: "HeroDevs",
      bio: "Frosty helped build the Angular community. For more than 8 years he has built things with Angular and taught people how to use Angular. He is a business owner (HeroDevs, XLTS.dev), a conference organizer (ng-conf, RxJS.live), an open source maintainer (Scully), podcast host (Angular Show), and a husband/father of five. Frosty also loves fishing and eating tasty food. ",
      picture: "frosty",
      interventions: [
            {
                title: "Angular + Scully: Ultimate Speed",
                description: "There is nothing you can do as a developer to improve the experience of your users as much as embracing the Jamstack and integrating pre-rendering w/ dynamic loading of static content into your project. Your users will thank you.",
                type: "Full talk",
                language: "English",
                duration: "25 min"
            },
            {
                title: "Angular + Scully: How to build Jamstack apps with Angular",
                description: "Until you build your first Jamstack app it is hard to understand how much of a performance improvement it will be for your users. Delivering fully functional website for 1/20th of the size of an Angular app is a serious task. But it is made much easier with Scully. Come to this workshop to learn how to use Scully to produce a fully functional Jamstack site with Angular.",
                type: "Workshop",
                language: "Spanish",
                duration: "4 hrs"
            },
        ]
    },
  ]

  constructor() { }

  getSpeakers(): Speaker[] {
      return this.speakers;
  }

  getSpeakerById(id:number): Speaker {
    return this.speakers.filter( (el) => el.id === id  )[0];
  }
}
