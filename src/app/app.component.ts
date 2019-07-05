import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav *ngIf="showNav">
      <a routerLink="/subin">Subin</a>
      <a routerLink="/hyunjin">Hyunjin</a>
      <a routerLink="/sooyoung">Sooyoung</a>
    </nav>
    <button (click)="toggleNav()">Nav 숨기기</button>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        position: relative;
        width: 100vw;
        display: block;
        height: 100vh;
      }
      a {
        margin: 0 30px;
      }
      button {
        position: absolute;
        top: 0;
        right: 0;
      }
    `,
  ],
})
export class AppComponent {
  showNav: boolean;
  constructor() {
    this.showNav = true;
  }
  toggleNav() {
    this.showNav = !this.showNav;
  }
}
