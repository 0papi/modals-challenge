import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-wrapper-component',
  templateUrl: './modal-wrapper-component.component.html',
  styleUrls: ['./modal-wrapper-component.component.css']
})
export class ModalWrapperComponentComponent {
  @Input() contentComponent: any;
}
