import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
/*import { LogicComponent } from './components/logic/logic.component';
import { LgmenuComponent } from './components/lgmenu/lgmenu.component';
import { ApmenuComponent } from './components/apmenu/apmenu.component';
import { AptitudeComponent } from './components/aptitude/aptitude.component';
import { TapmenuComponent } from './components/tapmenu/tapmenu.component';
import { TaptitudeComponent } from './components/taptitude/taptitude.component';
import { EvaluateComponent } from './components/evaluate/evaluate.component';
import { CpmenuComponent } from './components/cpmenu/cpmenu.component';
import { CompanyComponent } from './components/company/company.component';
import { ResumeComponent } from './components/resume/resume.component';
import { TestComponent } from './components/test/test.component';
import { EssayComponent } from './components/essay/essay.component';*/

import { ResultComponent } from './components/result/result.component';
import { ReportComponent } from './components/report/report.component';

import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { AuthGuard } from './guards/auth.guard';

/*import {ImageService} from './services/image.service';
import { TestGuard } from './guards/test.guard';
import { EvaluateGuard } from './guards/evaluate.guard';*/


const appRoutes: Routes=[
  {path:'', component:HomeComponent },
  {path:'register', component:RegisterComponent },
  {path:'login', component:LoginComponent },
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard] },
  {path:'profile', component:ProfileComponent, canActivate:[AuthGuard] },
  {path:'result', component:ResultComponent, canActivate:[AuthGuard] },
  {path:'report', component:ReportComponent, canActivate:[AuthGuard]}
/*
  {path:'logic', component:LogicComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard] },
  {path:'lgmenu', component:LgmenuComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard] },
  {path:'apmenu', component:ApmenuComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard] },
  {path:'aptitude', component:AptitudeComponent, canActivate:[AuthGuard,EvaluateGuard] },
  {path:'tapmenu', component:TapmenuComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard] },
  {path:'taptitude', component:TaptitudeComponent, canActivate:[AuthGuard,EvaluateGuard] },
  {path:'evaluate', component:EvaluateComponent, canActivate:[AuthGuard] },
  {path:'cpmenu', component:CpmenuComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard] },
  {path:'company', component:CompanyComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard] },
  {path:'resume', component:ResumeComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard] },
  {path:'test', component:TestComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard]},
  {path:'essay', component:EssayComponent, canActivate:[AuthGuard,TestGuard,EvaluateGuard]}*/
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    ResultComponent,
    ReportComponent,
    /*LogicComponent,
    LgmenuComponent,
    ApmenuComponent,
    AptitudeComponent,
    TapmenuComponent,
    TaptitudeComponent,
    EvaluateComponent,
    CpmenuComponent,
    CompanyComponent,
    ResumeComponent,
    TestComponent,
    EssayComponent*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
