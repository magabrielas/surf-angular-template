import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'info', loadChildren:()=> import('./contact/contact.module').then(m=>m.ContactModule)},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
