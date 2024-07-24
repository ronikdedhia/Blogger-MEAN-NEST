import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService, Blog } from '../blog.service';

@Component({
  selector: 'app-blog-create',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="blog-create">
      <h2>Create New Blog</h2>
      <form (ngSubmit)="onSubmit()">
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" [(ngModel)]="blog.title" name="title" required>
        </div>
        <div>
          <label for="content">Content:</label>
          <textarea id="content" [(ngModel)]="blog.content" name="content" required></textarea>
        </div>
        <button type="submit">Create Blog</button>
      </form>
    </div>
  `,
  styles: [`
    .blog-create {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    form {
      display: flex;
      flex-direction: column;
    }
    label {
      margin-top: 10px;
    }
    input, textarea {
      width: 100%;
      padding: 5px;
      margin-top: 5px;
    }
    button {
      margin-top: 20px;
      padding: 10px;
      background-color: #3f51b5;
      color: white;
      border: none;
      cursor: pointer;
    }
  `]
})
export class BlogCreateComponent {
  blog: Blog = { title: '', content: '' };

  constructor(private blogService: BlogService, private router: Router) { }

  onSubmit(): void {
    this.blogService.createBlog(this.blog).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}