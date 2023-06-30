// Module imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';

// Page imports
import { HomePage } from './pagehome/home.component';
import { AboutMePage } from './pageaboutme/aboutme.component';
import { ContactMePage } from './pagecontactme/contactme.component';

// Component imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomecardComponent } from './homecard/homecard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    AboutMePage,
    ContactMePage,
    NavbarComponent,
    HomecardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
