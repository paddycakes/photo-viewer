import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main id="content" role="main">
      <section>
        <router-outlet></router-outlet>
      </section>
    </main>
  `
})
export class AppComponent { }
