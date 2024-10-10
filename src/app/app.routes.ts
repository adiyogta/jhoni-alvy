import { Routes } from '@angular/router';
import { AlvyyatunJhoniComponent } from './alvyyatun-main/alvyyatun-jhoni.component';
import { AlvyyatunMainComponent } from './alvyyatun-main/alvyyatun-main.component';

export const routes: Routes = [
  {
    path: ':guestName',
    children: [
      { path: '', title: 'Nesi & Yogta', component: AlvyyatunJhoniComponent },
      { path: 'main', title: 'Nesi & Yogta', component: AlvyyatunMainComponent },
    ]
  },
  { path: '404', component: AlvyyatunJhoniComponent },
  { path: '', component: AlvyyatunJhoniComponent, pathMatch: 'full' }, // Redirect empty path to 404
  { path: '**', component: AlvyyatunJhoniComponent } // Catch all invalid routes and redirect to 404
];