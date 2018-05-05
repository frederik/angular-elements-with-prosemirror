import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ProsemirrorModule } from './prosemirror/prosemirror.module';
import { AppComponent } from './app.component';
import { MyElementComponent } from './my-element/my-element.component';

@NgModule({
  declarations: [
    AppComponent,
    MyElementComponent
  ],
  imports: [
    BrowserModule,
    ProsemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MyElementComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const AppElement = createCustomElement(MyElementComponent, { injector: this.injector });
    console.log(AppElement);
    customElements.define('my-element', AppElement);
  }
  ngDoBootstrap() {

  }
}
