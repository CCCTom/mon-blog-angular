export class PostService {
  posts = [
    {
        title: 'Mon premier post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla nisi at fermentum vulputate. Praesent elementum dui ac feugiat tempor. Donec sapien sapien, sagittis no',
        loveIts: 2,
        created_at: new Date()
    },
    {
        title: 'Mon deuxieme post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla nisi at fermentum vulputate. Praesent elementum dui ac feugiat tempor. Donec sapien sapien, sagittis no',
        loveIts: -1,
        created_at: new Date()
    },
    {
        title: 'Mon troisime post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla nisi at fermentum vulputate. Praesent elementum dui ac feugiat tempor. Donec sapien sapien, sagittis no',
        loveIts: 0,
        created_at: new Date()
    }
  ];
}
