import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreatAboutComponent } from './creat-about/creat-about.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'creatabout',component:CreatAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
