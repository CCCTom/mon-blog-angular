import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {PostService} from './services/post.service';
import {Route, RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
