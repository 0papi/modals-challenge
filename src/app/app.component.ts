import { Component } from '@angular/core';
import { createModal } from 'src/modal-utils';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { ModalService } from './services/modal-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'modal-challenge';

  constructor(private modalService: ModalService) {}

  // pass component to createModal function and grab openModal from it
  // run open modalfn to see if modal shows up
  // NB: Bind openModal to html element (button) through click event
  openModal() {
    const { openModal } = createModal(ModalContentComponent, this.modalService);
    openModal();
  }

  // bind fn to close modal to button component
  // NB: Hitting ESC key on keyboard should close modal too
  close() {
    const { closeModal } = createModal(
      ModalContentComponent,
      this.modalService
    );
    closeModal();
  }
}
