import { RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddhutsComponent } from './components/addhuts/addhuts.component';
import { BookedhutsComponent } from './components/bookedhuts/bookedhuts.component';
import { AuthGuard } from './guards/auth.guard';
import { HutdetailsComponent } from './components/hutdetails/hutdetails.component';
import { MyhutsComponent } from './components/myhuts/myhuts.component';
import { UpdateComponent } from './components/update/update.component';
import { GooglemapComponent } from './components/googlemap/googlemap.component';

export const routes: Routes = [
 { path: '' , redirectTo: 'login' , pathMatch: 'full' },
 { path: 'home' ,      component: HomeComponent }, 
 { path: 'login' ,     component: LoginComponent },
 { path: 'register' ,  component: RegisterComponent },
 { path: 'dashboard' , component: DashboardComponent,
canActivate:[AuthGuard]},
 { path: 'addhuts' , component: AddhutsComponent,
canActivate:[AuthGuard]},
 { path: 'bookedhuts' , component: BookedhutsComponent,
canActivate:[AuthGuard]},
 { path: 'hutdetails/:id' , component: HutdetailsComponent,
canActivate:[AuthGuard]},
 {path: 'myhuts', component: MyhutsComponent,
canActivate:[AuthGuard]},
 {path: 'update/:id', component:UpdateComponent,
canActivate:[AuthGuard]},
{path: 'map', component:GooglemapComponent,
canActivate:[AuthGuard]}


];


 export const router: ModuleWithProviders = RouterModule.forRoot(routes)
 