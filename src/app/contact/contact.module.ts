import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
/**
 * { path:'home', component:HomeComponent},
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'info', loadChildren:()=> import('./contact/contact.module').then(m=>m.ContactModule)},
    
 */