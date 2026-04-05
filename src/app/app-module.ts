import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Outcomes } from './components/outcomes/outcomes';
import { Instructor } from './components/instructor/instructor';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { SuccessStories } from './components/success-stories/success-stories';
import { Companies } from './components/companies/companies';
import { Testimonials } from './components/testimonials/testimonials';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [
    App,
    Navbar,
    Hero,
    Outcomes,
    Instructor,
    HowItWorks,
    SuccessStories,
    Companies,
    Testimonials,
    Footer,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
