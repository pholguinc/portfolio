import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { skillI, skills } from './utils/skills';
import { SocialButtonsComponent } from './components/social-buttons/social-buttons.component';
import { ActionsButtonsComponent } from './components/actions-buttons/actions-buttons.component';
import { experienceI, experiences } from './utils/jobs-experiences';
import { CommonModule } from '@angular/common';
import { projectI, projects } from './utils/projects';
import { FooterComponent } from './components/footer/footer.component';
import * as AOS from 'aos';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SocialButtonsComponent,
    ActionsButtonsComponent,
    FooterComponent,
    ModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('modal') modal!: ModalComponent;
  title = 'portfolio';
  skills: skillI[] = skills;
  experiences: experienceI[] = experiences;
  projects: projectI[] = projects;

  experiencesLimit: number = 1;
  selectedProject: number = 0;
  selectedProjects: projectI | null = null;
  showProjectDetails: boolean = true;

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    document.onreadystatechange = function () {
      if (document.readyState == 'complete') {
        AOS.init();
        window.addEventListener('scroll', AOS.refresh);
      }
    };
  }

  openModal(project: projectI) {
    this.modal.open();
    this.selectedProjects = project;
  }
}
