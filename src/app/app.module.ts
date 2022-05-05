import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PersonatComponent } from './personat/personat.component';
import { UshtrimeComponent } from './ushtrime/ushtrime.component';
import { StudentetComponent } from './studentet/studentet.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    CalculatorComponent,
    PersonatComponent,
    UshtrimeComponent,
    StudentetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
