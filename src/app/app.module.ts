import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents }        from './app.routing';

import { AlertComponent } from './_directive';
import { AuthGuard } from './_guard';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { IDonateTableComponent } from './i-donate-table/i-donate-table.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataTableModule} from "angular-6-datatable";
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';






@NgModule({
  declarations: [
    AppComponent,
    IDonateTableComponent,
    NavComponent,
    SidebarComponent,
    routingComponents,
    AlertComponent,
    TopWidgetsComponent,

  
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
