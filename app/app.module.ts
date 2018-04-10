// https://www.youtube.com/watch?v=4uajiXW5R3o
// https://www.youtube.com/watch?v=g4GLfjcYhoQ
// https://www.youtube.com/watch?v=84bXch-YIvI
// https://www.youtube.com/watch?v=ZpU3mEaK0_w

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { LazyModule } from './lazy/lazy.module';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { LoginServices } from './login/login.services'

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './other/PageNotFound.component';

import { RouterModule, Routes } from '@angular/router';
import {routing} from "./app.route";

import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // <-- #1 import component
import { HeroListComponent }   from './hero-list/hero-list.component';

import { HeroService }         from './hero.service';

// import { Collectable } from './collectable-model';
import { CollectableService } from './collectable.service';
import { CollectionComponent } from './collection/collection.component';
import { MarketComponent } from './market/market.component';
import { DynamicpagesComponent } from './dynamicpages/dynamicpages.component';
import { UsersService } from './dynamicpages/users.service';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
// import { CustomFilter } from './filter.pipe'; //  <-- #1 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginateModule } from 'ngx-paginate';

@NgModule({
	declarations: [ AppComponent, AboutComponent, HomeComponent, PageNotFoundComponent, HeroDetailComponent, HeroListComponent, CollectionComponent, MarketComponent, DynamicpagesComponent, UsersComponent  ],
	imports: [ BrowserModule, RouterModule, routing, HttpModule, ReactiveFormsModule, LazyModule, FormsModule, Ng2SearchPipeModule, NgxPaginateModule ],
	providers: [ HeroService, LoginServices, CollectableService, UsersService ],
	bootstrap: [AppComponent],
	exports: [AppComponent, HeroDetailComponent, HeroListComponent]
})

export class AppModule { }
