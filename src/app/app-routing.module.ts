import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ButtonsIconsComponent} from "./buttons-icons/buttons-icons.component";
import {FormFieldInputComponent} from "./form-field-input/form-field-input.component";
import {ProgressbarSpinnersComponent} from "./progressbar-spinners/progressbar-spinners.component";
import {TabsComponent} from "./tabs/tabs.component";
import {DatepickerComponent} from "./datepicker/datepicker.component";
import {SnackbarComponent} from "./snackbar/snackbar.component";

const routes: Routes = [
  {path: 'buttonIcon', component: ButtonsIconsComponent},
  {path: 'formFieldInput', component: FormFieldInputComponent},
  {path: 'progBarSpinner', component: ProgressbarSpinnersComponent},
  {path: 'tabs', component: TabsComponent},
  {path: 'datepicker', component: DatepickerComponent},
  {path: 'snackbar', component: SnackbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
