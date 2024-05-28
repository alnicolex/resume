import { NgModule, Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { HomeComponent } from './pages/home/home.component';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CardComponent } from './components/card/card.component';
import { HighlightDirective } from './components/card/highlight.directive'

import { SkillsService } from './services/skills.service';
import { BasicInformationService } from './services/basic-information.service';
import { WorksService } from './services/works.service';
import { EducationService } from './services/education.service';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccordionComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CardComponent,
    HighlightDirective,
    CarouselComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SkillsService,
    BasicInformationService,
    WorksService,
    EducationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
