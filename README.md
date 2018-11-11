# Photo Viewer

## Overview

This is a photo viewer application that provides a carrousel to visualise photos.

## Functionality

* Provides user with the option to view:
  * all photos
  * photos within a selected album

* The carrousel has Next & Previous buttons to navigate through the pictures
  * previous button is not shown if at start of photo or album collection
  * next button is not shown if at end of photo or album collection

* Thumbnails are used for Next & Previous buttons

* Can deep-link to:
  * a particular album, eg. /albums/15
  * all photos, eg. /photos

## Technical spec

This project was is implemented in Angular 7.0.0 using TypeScript 3.1.1. It also uses NgRX 6.1.2 for state management.

NgRX selectors provide a rich interface to shaping the underlying simple data source for a variety of aggregate operations. They also use memoisation to ensure previously computed values are returned and not recomputed on demand.

Deep-linking functionality is provided by the use of a Guard to ensure data is loaded for required route.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

There are currently 11 end-to-end tests implemented as seen below:

![E2E Tests](https://github.com/paddycakes/photo-viewer/blob/master/src/assets/images/protractor-test-output.png)

## Screenshots

**Welcome Page**

![Welcome Page](https://github.com/paddycakes/photo-viewer/blob/master/src/assets/images/welcome-page.png)

**Select Album Page**

![Select Album Page](https://github.com/paddycakes/photo-viewer/blob/master/src/assets/images/select-album-page.png)

**View Album Page**

![View Album Page](https://github.com/paddycakes/photo-viewer/blob/master/src/assets/images/view-album-page.png)
