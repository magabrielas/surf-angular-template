import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ContactModule } from './contact/contact.module';

import { createCustomElement } from '@angular/elements';
import { NavComponent } from './nav/nav.component';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { 
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(LayoutComponent, {injector: this.injector});
    customElements.define('mfe1-element', ce);

  }
}
