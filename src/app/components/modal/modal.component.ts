import { Component, Input } from '@angular/core';
import { projectI } from '../../utils/projects';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.sass',
})
export class ModalComponent {
  @Input() project: projectI | null = null;
  isOpen: boolean = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.project = null;
  }
}
