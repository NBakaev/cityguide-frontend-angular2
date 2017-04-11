/**
 * Created by ya_000 on 4/11/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NewcomponentComponent} from 'app/poi/pois.component';
import {PoiDetailsComponent} from './poi-details/poi-details.component';

export const router: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: NewcomponentComponent},
  { path: 'poi/details/:id', component: PoiDetailsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash:false});
