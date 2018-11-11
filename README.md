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
  This functionality is provided by the use of a Guard to ensure data is loaded for required route.

## Technical spec

This project was is implemented in Angular 7.0.0 using TypeScript 3.1.1. It also uses NgRX 6.1.2 for state management.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

