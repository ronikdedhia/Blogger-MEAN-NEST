import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { BlogListComponent } from './app/blog-list/blog-list.component';
import { BlogCreateComponent } from './app/blog-create/blog-create.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: BlogListComponent },
      { path: 'create', component: BlogCreateComponent },
    ])
  ]
}).catch(err => console.error(err));