import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    loadComponent: () =>
      import('./core/layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent)
}
     
];   
