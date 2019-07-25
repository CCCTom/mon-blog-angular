import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable()
export class PostService {
  
  private posts: Post[] = [
    new Post('Mon premier post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla nisi at fermentum vulputate.',
      2,
      new Date(2019, 5, 5, 17, 23)),
    new Post('Mon deuxieme post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla nisi at fermentum vulputate.',
      -1,
      new Date(2019, 5, 5, 19, 54)),
    new Post('Mon troisieme post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla nisi at fermentum vulputate.',
      0,
      new Date(2019, 5, 6, 12, 12)),
  ];
  
  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  deletePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  likePost(post: Post){
    post.loveIts += 1;
    this.emitPosts();
  }

  dislikePost(post: Post){
    post.loveIts -= 1;
    this.emitPosts();
  }
}
