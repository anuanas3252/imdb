import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  movieArray: any;

  constructor(private http: HttpClient) { }



  // Added onFetchMovies() to fetch the data from API
  onFetchMovies() {
    return this.http.get('https://imdb-api.com/en/API/Top250Movies/k_q78lyl0e')
      .pipe(
        map(responseData => {

          console.log(responseData);

          const postArray = [];
          const movie = responseData['items']
          for (const i in movie) {
            postArray.push(movie[i]);
          }
          return postArray;
        })
      )
      ;

  }

}
