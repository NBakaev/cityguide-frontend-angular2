import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NewcomponentComponent} from './poi/pois.component';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, MdMenuModule, MdInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { routes } from './app.router';
import { PoiDetailsComponent } from './poi-details/poi-details.component';
// import 'tinymce';
import { TinymceModule } from 'angular2-tinymce';

@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    PoiDetailsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, MdMenuModule, MdInputModule,
    BrowserAnimationsModule,
    routes,
    TinymceModule.withConfig({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
