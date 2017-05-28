import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PoisListComponent} from './poi/pois.component';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, MdMenuModule, MdInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { routes } from './app.router';
import { PoiDetailsComponent } from './poi-details/poi-details.component';
// import 'tinymce';
import { TinymceModule } from 'angular2-tinymce';
import { PrintCityPipe } from './poi/print-city.pipe';
import {RestProviderService} from './core/network/rest-provider.service';
import {QRCodeModule} from 'angular2-qrcode';
import { CitiesListComponent } from './cities-list/cities-list.component';
import {PoiService} from './poi/poi.service';

@NgModule({
  declarations: [
    AppComponent,
    PoisListComponent,
    PoiDetailsComponent,
    PrintCityPipe,
    CitiesListComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, MdMenuModule, MdInputModule, MdButtonModule,
    BrowserAnimationsModule,
    routes,
    TinymceModule.withConfig({menubar: false, statusbar: false}),
    QRCodeModule
  ],
  providers: [RestProviderService, PoiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
