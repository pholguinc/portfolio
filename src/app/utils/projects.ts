export const projects: projectI[] = [
  {
    title: 'Proyecto de App de Gestión de Citas Médicas',
    description:
      'Me encargué del desarrollo de interfaces con flutter y desarrollo de Apis y servicios en Nestjs, implementación de base de datos en PostgreSQL, además de la implementación de un sistema de autenticación con JWT.',
    color: '#7269ff',
    images: ['./assets/images/portfolio/taclia-capture.jpg'],
    technologies: [
      'devicon-flutter-plain',
      'devicon-nestjs-original',
      'devicon-typescript-plain',
      'devicon-rxjs-plain',
      'devicon-postgresql-plain',
    ],
    url: 'https://www.taclia.com/',
  },
  {
    title: 'Proyecto de Sistema de Inventario e incidencias',
    description:
      'Es un sistema de web para registro de incidencias y control de inventario, también el traspaso de material entre sedes, desarrollado con Angular 17 y Nestjs, implementación de base de datos en PostgreSQL, además de la implementación de un sistema de autenticación con JWT.',
    color: '#63cbb2',
    images: ['./assets/images/portfolio/dondoctor-capture.jpg'],
    technologies: [
      'devicon-react-original',
      'devicon-typescript-plain',
      'devicon-mysql-original',
      'devicon-nodejs-plain-wordmark',
    ],
    url: 'https://www.dondoctor.com/',
  },
  {
    title: 'Sistema de gestión de ventas e inventario para Óptica',
    description:
      'Una aplicación web diseñada para gestionar ventas para óptica y optometría el cual se está implementando microservicios con NestJS y Nats para la comunicación entre los servicios, además de la implementación de un sistema de autenticación con JWT.',
    color: '#ff6969',
    images: ['./assets/images/portfolio/optica.png'],
    technologies: [
      'devicon-nestjs-original',
      'devicon-typescript-plain',
      'devicon-rxjs-plain',
      'devicon-angular-plain',
      'devicon-postgresql-plain',
      'devicon-docker-plain',
    ],
    url: 'https://www.youtube.com/watch?v=kyZ7U-El2OY',
  },

  {
    title: 'Api de Facturación electónica SUNAT - Perú',
    description:
      'Una aplicación web diseñada para gestionar ventas e inventario de una óptica y optometría el cual se está implementando microservicios con NestJS y Nats para la comunicación entre los servicios, además de la implementación de un sistema de autenticación con JWT.',
    color: '#ff6969',
    images: ['https://e.rpp-noticias.io/large/2015/02/02/1466486.jpg'],
    technologies: [
      'devicon-nestjs-original',
      'devicon-typescript-plain',
      'devicon-rxjs-plain',
      'devicon-angular-plain',
      'devicon-postgresql-plain',
      'devicon-docker-plain',
    ],
    url: 'https://www.youtube.com/watch?v=kyZ7U-El2OY',
  },

  {
    title: 'App Móvil para control de asistencia con código QR',
    description:
      'Una aplicación nativa para android para el control de asistencia de alumnos el cual está implementado con Android Studio en Java con APi hecha en Laravel.',
    color: '#ff6969',
    images: ['https://e.rpp-noticias.io/large/2015/02/02/1466486.jpg'],
    technologies: [
      'devicon-nestjs-original',
      'devicon-typescript-plain',
      'devicon-rxjs-plain',
      'devicon-angular-plain',
      'devicon-postgresql-plain',
      'devicon-docker-plain',
    ],
    url: 'https://www.youtube.com/watch?v=kyZ7U-El2OY',
  },

  {
    title: 'Sistema de Restaurantes con control de pedidos',
    description:
      'Una aplicación web para el control de pedidos de un restaurante el cual está implementado con PHP Nativo.',
    color: '#ff6969',
    images: ['https://e.rpp-noticias.io/large/2015/02/02/1466486.jpg'],
    technologies: [
      'devicon-nestjs-original',
      'devicon-typescript-plain',
      'devicon-rxjs-plain',
      'devicon-angular-plain',
      'devicon-postgresql-plain',
      'devicon-docker-plain',
    ],
    url: 'https://www.youtube.com/watch?v=kyZ7U-El2OY',
  },
];

export interface projectI {
  title: string,
  description: string,
  color: string,
  images: string[],
  technologies: string[],
  url: string
}
