import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EventListComponent} from './event-list/event-list.component';
import {WaitListComponent} from './wait-list/wait-list.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'waitList', component: WaitListComponent},
    { path: 'eventList', component: EventListComponent},
    { path: 'unauthorized', component: UnauthorizedComponent },
];
