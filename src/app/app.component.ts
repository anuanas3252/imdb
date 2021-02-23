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
}
