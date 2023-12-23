import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EventListComponent} from './event-list/event-list.component';
import {WaitListComponent} from './wait-list/wait-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'waitList', component: WaitListComponent},
    { path: 'eventList', component: EventListComponent},
];
