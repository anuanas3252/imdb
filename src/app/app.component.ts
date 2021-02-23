import { DataService } from './data.service';


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imdb';
  moviePosts = [];
  error = null;

  constructor(private dataService: DataService) { }


  // onFectch() used to fetch the data through Data service from API
  onFetch() {
    this.dataService.onFetchMovies().subscribe(posts => {
      this.moviePosts = posts['items']
      this.error = posts['errorMessage'];
      console.log(this.error);
      console.log(this.moviePosts);
    }
    );



  }


  getColor(val) {
    if (val >= 9) {
      return 'green';

    }
    else if (val < 9 && val >= 8) {
      return 'yellow';
    }
    else if (val < 8) {
      return 'blue';
    }
    else {
      return 'pink';
    }
  }
}
