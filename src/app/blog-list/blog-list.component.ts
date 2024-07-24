import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService, Blog } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="blog-list">
      <h2>Latest Blogs</h2>
      <div *ngFor="let blog of blogs" class="blog-item">
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.content }}</p>
      </div>
    </div>
  `,
  styles: [`
    .blog-list {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    .blog-item {
      background-color: #f0f0f0;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 5px;
    }
    h2 {
      color: #3f51b5;
    }
  `]
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(blogs => this.blogs = blogs);
  }
}