import {
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, Subject, catchError, map, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) {}

  public movieSubject = new Subject<Movie[]>();
  private urlBase: string = 'https://api.themoviedb.org/3/search/movie';
  private token: string = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2Y5YWFlMjkwYmI4NDNkMjFhYjcxYjU4ZTVjYmNhYiIsInN1YiI6IjY0YzAyZTM5OGVlNDljMGZjZmQ2ZWYxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XupYOyaHD35GbOsL7bfzfOMVQg8YvgFK0wXAS0aztsM' 
  
  
  public search(movie: string): Observable<Movie[] | null> {
    
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token
      }),
    };

    let params = new HttpParams().set('query', movie);
    
    this.http.get<Movie[]>(this.urlBase, { headers: httpOptions.headers, params }).pipe(
      map((response: any) => response.results),
      tap((movies) => console.log(movies)),
      catchError((error) => {
        console.error('Error fetching movies:', error);
        return of(null);
      })
    ).subscribe()
    return this.movieSubject.asObservable()
  }
}
