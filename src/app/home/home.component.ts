import { Component } from '@angular/core';

class Story {
  constructor(public id: number, public imageUrl: string, public username: string) {}
}

class Comment {
  constructor(public id: number, public user: string, public text: string) {}
}

class Post {
  constructor(
    public id: number,
    public user: { imageUrl: string; username: string },
    public postImage: string,
    public likes: number,
    public comments: Comment[]
  ) {}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  stories: Story[] = [
    new Story(1, 'https://www.sosyncd.com/wp-content/uploads/2022/06/62-2.png', 'Username1'),
    new Story(2, 'https://www.sosyncd.com/wp-content/uploads/2022/06/62-2.png', 'Username2'),
    // Add more story objects as needed
  ];

  posts: Post[] = [
    new Post(1, { imageUrl: 'https://www.sosyncd.com/wp-content/uploads/2022/06/62-2.png', username: 'Username' }, 'https://musicart.xboxlive.com/7/93171200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080', 100, []),
    // Add more post objects as needed
  ];
}
