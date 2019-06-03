import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShipService } from './ship-details.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule, MatMenuModule, MatNativeDateModule,
  MatIconModule, MatCardModule, MatSidenavModule, MatFormFieldModule,
  MatInputModule, MatTooltipModule, MatToolbarModule
} from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ShipDetailsComponent } from './ship-details/ship-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatNativeDateModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    RouterModule
  ],
  providers: [HttpClientModule, ShipDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
