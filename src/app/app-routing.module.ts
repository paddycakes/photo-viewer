import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMenuContainer } from './home-menu/home-menu.container';
import { ViewPhotosContainer } from './view-photos/view-photos.container';
import { ViewAlbumContainer } from './view-album/view-album.container';
import { LoadPhotosGuard } from './core';
import { SelectAlbumContainer } from './select-album/select-album.container';

const routes: Routes = [
  { path: '', component: HomeMenuContainer, canActivate: [ LoadPhotosGuard ]},
  {
    path: '', canActivate: [ LoadPhotosGuard ],
    children: [
      { path: 'photos', component: ViewPhotosContainer },
      {
        path: 'albums',
        children: [
          {
            path: '',
            component: SelectAlbumContainer
          },
          {
            path: ':id',
            component: ViewAlbumContainer
          },
        ]
      }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
