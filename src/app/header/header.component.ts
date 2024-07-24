import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header>
      <h1>My Awesome Blogs</h1>
      <nav>
        <a routerLink="/">Home</a>
        <a routerLink="/create">Create</a>
      </nav>
    </header>
  `,
  styles: [`
    header {
      background-color: #3f51b5;
      color: white;
      padding: 20px;
    }
    h1 {
      margin: 0;
    }
    nav {
      margin-top: 10px;
    }
    nav a {
      color: white;
      text-decoration: none;
      margin-right: 10px;
    }
  `]
})
export class HeaderComponent {}