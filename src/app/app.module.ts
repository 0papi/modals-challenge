import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalWrapperComponentComponent } from './components/modal-wrapper-component/modal-wrapper-component.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalWrapperComponentComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
