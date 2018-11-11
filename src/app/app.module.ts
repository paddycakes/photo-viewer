import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  LoadPhotosGuard,
  PhotoProviderService,
  reducers
} from './core';
import {
  CarrouselComponent,
  PhotoFullSizeComponent,
  PhotoThumbnailComponent,
  HeaderComponent,
  BreadcrumbsComponent
} from './shared';
import { HomeMenuContainer } from './home-menu/home-menu.container';
import { ViewPhotosContainer } from './view-photos/view-photos.container';
import { ViewAlbumContainer } from './view-album/view-album.container';
import { SelectAlbumContainer } from './select-album/select-album.container';

@NgModule({
  declarations: [
    AppComponent,
    HomeMenuContainer,
    ViewPhotosContainer,
    SelectAlbumContainer,
    ViewAlbumContainer,
    CarrouselComponent,
    PhotoFullSizeComponent,
    PhotoThumbnailComponent,
    HeaderComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    LoadPhotosGuard,
    PhotoProviderService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
