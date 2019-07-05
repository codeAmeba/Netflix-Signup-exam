import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <nav>
      <a routerLink="/subin">Subin</a>
      <a routerLink="/hyunjin">Hyunjin</a>
      <a routerLink="/sooyoung">Sooyoung</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      a {
        margin: 0 30px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Signup-Test';
}
