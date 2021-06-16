import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { createCustomElement } from '@angular/elements';

import { NavComponent } from './nav/nav.component';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home.component';
import { ContactComponent } from './contact/components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LayoutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
