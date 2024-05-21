import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLinkActive } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TooltipComponent } from './tooltip/tooltip.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    OurServicesComponent,
    AboutusComponent,
    TooltipComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLinkActive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
