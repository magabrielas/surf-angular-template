import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';


const routesContact: Routes =[
  { path:'info', component: ContactComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routesContact)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule { }
