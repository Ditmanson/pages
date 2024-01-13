import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nextPage() {
    this.currentPage = (this.currentPage + 1);
  }
  prevPage() {
    this.currentPage = (this.currentPage - 1);
  }
  setPage(page: number) {
    this.currentPage = page;
    console.log(this.currentPage);
  }
  checkWindowIndex(index: number) {
    if (Math.abs(this.currentPage - index) < 3) {
      return true;
    }
    else if (this.currentPage < 2 && index < 5) {
      return true;
    }
    else if (this.currentPage > this.images.length - 3 && index > this.images.length - 6) {
      return true;
    }
    return false;
  }

  currentPage = 0 ;
  images = [
    {
      title: 'City',
      url: 'https://plus.unsplash.com/premium_photo-1661943864527-d714736dfd16?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
    },
    {
      title: 'Desert',
      url: 'https://images.unsplash.com/photo-1682687220015-186f63b8850a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
    },
    {
      title: 'Driving on a Mountain',
      url: 'https://images.unsplash.com/photo-1704996440137-44a1eb3c71ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
    },
    {
      title: 'A tree with snow',
      url: 'https://images.unsplash.com/photo-1704913427603-6cb736d51f05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
    },
    {
      title: 'Astronauts',
      url: 'https://images.unsplash.com/photo-1704869881379-4e88e66c0248?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
    },
    {
      title: 'City',
      url: 'https://plus.unsplash.com/premium_photo-1661943864527-d714736dfd16?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
    },
    {
      title: 'Desert',
      url: 'https://images.unsplash.com/photo-1682687220015-186f63b8850a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
    },
    {
      title: 'Driving on a Mountain',
      url: 'https://images.unsplash.com/photo-1704996440137-44a1eb3c71ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
    },
    {
      title: 'A tree with snow',
      url: 'https://images.unsplash.com/photo-1704913427603-6cb736d51f05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
    },
    {
      title: 'Astronauts',
      url: 'https://images.unsplash.com/photo-1704869881379-4e88e66c0248?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
    },
    {
      title: 'City',
      url: 'https://plus.unsplash.com/premium_photo-1661943864527-d714736dfd16?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
    },
    {
      title: 'Desert',
      url: 'https://images.unsplash.com/photo-1682687220015-186f63b8850a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
    },
    {
      title: 'Driving on a Mountain',
      url: 'https://images.unsplash.com/photo-1704996440137-44a1eb3c71ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
    },
    {
      title: 'A tree with snow',
      url: 'https://images.unsplash.com/photo-1704913427603-6cb736d51f05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
    },
    {
      title: 'Astronauts',
      url: 'https://images.unsplash.com/photo-1704869881379-4e88e66c0248?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
    },
    {
      title: 'City',
      url: 'https://plus.unsplash.com/premium_photo-1661943864527-d714736dfd16?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
    },
    {
      title: 'Desert',
      url: 'https://images.unsplash.com/photo-1682687220015-186f63b8850a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
    },
    {
      title: 'Driving on a Mountain',
      url: 'https://images.unsplash.com/photo-1704996440137-44a1eb3c71ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
    },
    {
      title: 'A tree with snow',
      url: 'https://images.unsplash.com/photo-1704913427603-6cb736d51f05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
    },
    {
      title: 'Astronauts',
      url: 'https://images.unsplash.com/photo-1704869881379-4e88e66c0248?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
    },
  ];
}
