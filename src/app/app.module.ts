import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './layout/start-page/start-page.component';
import { ParallaxInitDirective } from './layout/directives/parallax-init.directive';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    ParallaxInitDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
