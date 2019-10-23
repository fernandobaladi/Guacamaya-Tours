import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonNavigationComponent } from './navigation/common-navigation/common-navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './services/services.component';
import { HotelsModule } from './hotels/hotels.module';

@NgModule({
  declarations: [
    AppComponent,
    CommonNavigationComponent,
    HeaderComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HotelsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
