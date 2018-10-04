import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { DetailsComponent } from './details/details.component';
import { SummaryComponent } from './summary/summary.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AuthGuard } from './_guard';

const appRoutes: Routes = [
   { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'summary', component: SummaryComponent },
    { path: 'tickets', component: TicketsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [TicketsComponent, LoginComponent, RegisterComponent, HomeComponent, DetailsComponent, ReportsComponent, SummaryComponent]

// export const Routing = RouterModule.forRoot(appRoutes);