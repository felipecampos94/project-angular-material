import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./Material/material.module";
import {ButtonsIconsComponent} from './buttons-icons/buttons-icons.component';
import {FormFieldInputComponent} from './form-field-input/form-field-input.component';
import {FormsModule} from "@angular/forms";
import { ProgressbarSpinnersComponent } from './progressbar-spinners/progressbar-spinners.component';
import { TabsComponent } from './tabs/tabs.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsIconsComponent,
    FormFieldInputComponent,
    ProgressbarSpinnersComponent,
    TabsComponent,
    DatepickerComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
