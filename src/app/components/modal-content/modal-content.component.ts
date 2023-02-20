import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal-service.service';
import { createModal } from 'src/modal-utils';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css'],
})
export class ModalContentComponent {
  constructor(private modalService: ModalService) {}

  close() {
    const { closeModal } = createModal(
      ModalContentComponent,
      this.modalService
    );
    closeModal();
  }
}
