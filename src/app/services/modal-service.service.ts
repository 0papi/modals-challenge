import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
} from '@angular/core';
import { ModalWrapperComponentComponent } from '../components/modal-wrapper-component/modal-wrapper-component.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
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
    const componentRef = factory.create(this.injector);

    // Set the content component for the modal component
    componentRef.instance.contentComponent = contentComponent;

    // Add the modal component to the DOM
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }
}
