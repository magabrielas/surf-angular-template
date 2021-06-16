import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
/*   {path:'', component: LayoutComponent}, 
 */
  {path:'home',
   loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},

  { path:'', redirectTo:'home', pathMatch:'full' },

  {path:'contact',
   loadChildren:()=> import('./contact/contact.module').then(m=>m.ContactModule)}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
