import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './pages/security/security.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'informacion', component: SecurityComponent },
      { path: '**', redirectTo: 'informacion'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformacionRoutingModule { }
