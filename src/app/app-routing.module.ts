import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/components/home.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { endsWith } from '@angular-architects/module-federation-tools';

const routes: Routes = [
/*   {path:'', component: LayoutComponent}, 
 */
{ matcher: endsWith('home'), component: HomeComponent},
{ matcher: endsWith('info'), component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
