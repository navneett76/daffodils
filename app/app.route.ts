import { ModuleWithProviders } from "@angular/core";
import { LazyModule } from './lazy/lazy.module';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './other/PageNotFound.component';

import { RouterModule, Routes } from '@angular/router';
// import { provideRouter, RouterConfig } from '@angular/router';


import { HeroListComponent }   from './hero-list/hero-list.component';


import { CollectionComponent } from './collection/collection.component';
import { MarketComponent } from './market/market.component';
import { DynamicpagesComponent } from './dynamicpages/dynamicpages.component';

import { UsersComponent } from './users/users.component';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: '', redirectTo: "/home", pathMatch: 'full' },
   { path: 'about', component: AboutComponent },
   { path: 'collection', component: CollectionComponent },
   { path: 'market', component: MarketComponent },
   { path: 'login', loadChildren: 'app/lazy/lazy.module#LazyModule' },
   { path: 'reacontactus', component: HeroListComponent },
   { path: 'users', component: UsersComponent }, //, canActivate: [AuthGuard]
   { path: 'user/:id', component: DynamicpagesComponent },
   { path: '**', component: PageNotFoundComponent },
];

// export const routingProviders = [
//     {provide: "boardGuard", useValue: boardGuard}
// ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

