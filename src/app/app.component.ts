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

  openModal() {
    const { openModal } = createModal(ModalContentComponent, this.modalService);
    openModal();
  }

  close() {
    console.log('Wanna close but it wont');
    const { closeModal } = createModal(
      ModalContentComponent,
      this.modalService
    );
    closeModal();
  }
}
