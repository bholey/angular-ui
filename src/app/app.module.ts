import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ServersComponent } from './servers/servers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CustomersComponent } from './customers/customers.component';
import { InvoicesComponent } from './invoices/invoices.component';



const appRoutes: Routes = [
  { path: 'login',      component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'customers',      component: CustomersComponent },
  { path: 'invoices',      component: InvoicesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServersComponent,
    DashboardComponent,
    NavBarComponent,
    CustomersComponent,
    InvoicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
