import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnyComponent } from './any/any.component';

@NgModule({
  declarations: [
    AppComponent,
    AnyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
ANHR le 17/09/2024
Il faut ajouter l'import de ReactiveFormsModule pour
pouvoir utiliser les formulaires REACTIVE
*/
