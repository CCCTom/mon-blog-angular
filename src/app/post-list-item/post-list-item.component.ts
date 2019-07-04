import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIt: number;
  @Input() postCreated: Date;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }
  getColor() {
    if ( this.postLoveIt > 0 ) {
      return 'green';
    } else if ( this.postLoveIt < 0 ) {
      return 'red';
    }
    return 'black';
  }
  onLove() {
    this.postLoveIt += 1;
  }
  onDontLove() {
    this.postLoveIt -= 1;
  }
}
