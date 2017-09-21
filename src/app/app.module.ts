import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdSelectModule,
  MdToolbarModule
} from '@angular/material';

import { SelectComponent } from './select/select.component';
import { ViewComponent } from './view/view.component';
import { RecipeService } from './recipe.service';
import { SinglePageComponent } from './single-page/single-page.component';
import { MY_ROUTES } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    ViewComponent,
    SinglePageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSelectModule,
    MdToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
