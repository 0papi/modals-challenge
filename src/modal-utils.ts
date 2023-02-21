import { ModalService } from './app/services/modal-service.service';

/**
 * @description a function that receives a component and turns it into a modal
 * @param component
 * @param modalService
 * @returns { openModal & closeModal }
 */
export function createModal(component: any, modalService: ModalService) {
  const openModal = function () {
    modalService.openModal(component);
  };

  const closeModal = function () {
    modalService.closeModal();
  };

  return { openModal, closeModal };
}
