import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-desktopview',
  templateUrl: './desktopview.component.html',
  styleUrls: ['./desktopview.component.css']
})
export class DesktopviewComponent implements OnInit {

  moviePosts = [];
  error = null;
  p: number = 1;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.onFetch();
  }

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
