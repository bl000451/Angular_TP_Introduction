import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DevoirsComponent } from './devoirs/devoirs.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DevoirsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavBarComponent,
    SidebarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
