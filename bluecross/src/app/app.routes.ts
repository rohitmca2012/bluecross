import { Routes, RouterModule }  from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { EmailComponent } from './email'
import { PhoneComponent } from './phone'
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {path: '',
    redirectTo: 'phone',
    pathMatch: 'full'
  },
  {
    path:'phone',
    component:PhoneComponent
  },
  {
    path:'email',
    component:EmailComponent
  },

];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);