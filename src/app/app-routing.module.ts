import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/user/user.module').then( m => m.UserModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/informacion/informacion.module').then( m => m.InformacionModule)
  },
  {
    path: '**',
    redirectTo: 'security'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
