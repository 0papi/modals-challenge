import { ModalService } from './app/services/modal-service.service';

export function createModal(component: any, modalService: ModalService) {
  let modalRef;

  const openModal = function () {
    modalRef = modalService.openModal(component);
  };

  const closeModal = function () {
    if (modalRef) {
      modalRef.destroy();
    }
  };

  return { openModal, closeModal };
}
