import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  getColor() {
    if ( this.post.loveIts > 0 ) {
      return 'green';
    } else if ( this.post.loveIts < 0 ) {
      return 'red';
    }
    return 'black';
  }

  onLove() {
    this.post.loveIts += 1;
  }

  onDontLove() {
    this.post.loveIts -= 1;
  }

  onDelete(post: Post) {
    this.postService.deletePost(post);
  }
}
