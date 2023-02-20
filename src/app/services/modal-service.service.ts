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

  openModal(contentComponent: any): void {
    // Create a new instance of the modal component
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      ModalWrapperComponentComponent
    );
    this.modalComponentRef = factory.create(this.injector);

    // Set the content component for the modal component
    this.modalComponentRef.instance.contentComponent = contentComponent;

    // Add the modal component to the DOM
    this.appRef.attachView(this.modalComponentRef.hostView);
    const domElem = (this.modalComponentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    // Attach an event listener to the document object to listen for 'keydown' events
    document.addEventListener('keydown', this.handleKeyDown);
  }

  closeModal(): void {
    if (this.modalComponentRef) {
      this.appRef.detachView(this.modalComponentRef.hostView);
      this.modalComponentRef.destroy();
      this.modalComponentRef = null;
    }
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
}
