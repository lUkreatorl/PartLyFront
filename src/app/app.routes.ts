import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { UrlinfoComponent } from './Pages/urlinfo/urlinfo.component';
import { LoginComponent } from './Pages/login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'urlinfo/:id', component: UrlinfoComponent},
    { path: 'login', component: LoginComponent}
];
