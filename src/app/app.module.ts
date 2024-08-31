import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChooseUsComponent } from './components/choose-us/choose-us.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { ClientsComponent } from './components/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseUsComponent,
    AboutComponent,
    TeamComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
