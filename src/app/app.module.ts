import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UncompletedTodosComponent } from './uncompleted-todos/uncompleted-todos.component';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UncompletedTodosComponent,
    CompletedTodosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    ListboxModule,
    ButtonModule,
    InputTextModule,
    DividerModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
