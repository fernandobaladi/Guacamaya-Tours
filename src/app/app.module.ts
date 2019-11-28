import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonNavigationComponent } from './navigation/common-navigation/common-navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AdminNavigationComponent } from './navigation/admin-navigation/admin-navigation.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ClientSideBarComponent } from './components/client-side-bar/client-side-bar.component';
// import { VacationBuilderComponent } from './modules/vacationBuilder/vacation-builder/vacation-builder.component';
import { VacationBuilderNavigationComponent } from './navigation/vacation-builder-navigation/vacation-builder-navigation.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { VacationBuilderHeaderComponent } from './components/vacation-builder-header/vacation-builder-header.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VacationSideBarComponent } from './components/vacation-side-bar/vacation-side-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    CommonNavigationComponent,
    HeaderComponent,
    FooterComponent,
    AdminNavigationComponent,
    SideBarComponent,
    ClientSideBarComponent,
    VacationBuilderNavigationComponent,
    VacationBuilderHeaderComponent,
    VacationSideBarComponent,
    // VacationBuilderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CarouselModule.forRoot(),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
