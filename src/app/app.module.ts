import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ProsemirrorModule } from './prosemirror/prosemirror.module';
import { AppComponent } from './app.component';
import { MyElementComponent } from './my-element/my-element.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MyElementComponent
  ],
  imports: [
    BrowserModule,
    ProsemirrorModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MyElementComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const MyElement = createCustomElement(MyElementComponent, { injector: this.injector });
    customElements.define('my-element', MyElement);
  }
  ngDoBootstrap() {

  }
}
