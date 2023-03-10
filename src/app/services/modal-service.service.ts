import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
} from '@angular/core';
import { ModalWrapperComponentComponent } from '../components/modal-wrapper-component/modal-wrapper-component.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalComponentRef: ComponentRef<ModalWrapperComponentComponent> | null =
    null;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  /**
   * @description this function takes a component and turns it into a modal
   * @param contentComponent
   */
  openModal(contentComponent: any): void {
    // create an instance of the modal component
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      ModalWrapperComponentComponent
    );
    this.modalComponentRef = factory.create(this.injector);

    // set the content of the modal to the component passed by user
    this.modalComponentRef.instance.contentComponent = contentComponent;

    this.appRef.attachView(this.modalComponentRef.hostView);
    document.body.appendChild(this.modalComponentRef.location.nativeElement);

    // Attach an event listener to the document object to listen for 'keydown' event
    // enable user to remove modal by pressing ESC key on keyboard
    document.addEventListener('keydown', this.handleKeyDown);
  }

  /**
   * @description this function closes the modal
   */
  closeModal(): void {
    if (this.modalComponentRef) {
      this.appRef.detachView(this.modalComponentRef.hostView);
      this.modalComponentRef.destroy();
      this.modalComponentRef = null;
    }
  }

  /**
   * @description this function allows you to close the modal by using the ESC key on the keyboard
   * @param event
   */
  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  };
}
