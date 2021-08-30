import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './views/list/list.component';
import { PartComponent } from './views/part/part.component';
import { HeaderComponent } from './template/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './views/list/item/item.component';
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PartComponent,
    HeaderComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    // MatDialog,
    // MatDialogRef
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
