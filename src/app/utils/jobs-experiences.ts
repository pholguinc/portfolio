export const experiences: experienceI[] = [
  {
    title: 'Programador Fullstack',
    company: 'Native Lab',
    date: 'Octubre 2022 - Octubre 2024',
    detail:
      'Mantenimiento y desarrollo de aplicaciones con Angular y plugins para WordPress, desarrollo procedimientos almacenados y triggers en SQL Server, además de implementación de Apis REST en .Net Core.',
    technologies: [
      'devicon-javascript-plain',
      'devicon-css3-plain',
      'devicon-angular-plain',
      'devicon-typescript-plain',
      'devicon-rxjs-plain',
      'devicon-antdesign-plain',
      'devicon-bootstrap-plain',
      'devicon-php-plain',
      'devicon-wordpress-plain',
      'devicon-azuresqldatabase-plain',
      'devicon-dotnetcore-plain',
    ],
  },



];


export interface experienceI {
  title: string,
  company: string,
  date: string,
  detail: string,
  technologies: string[]
}
