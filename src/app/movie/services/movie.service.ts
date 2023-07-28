import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, of, tap } from 'rxjs';
import { Movie } from '../models/movie';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient, private router: Router) {}

  public movieSubject = new Subject<Movie[]>();
  private urlFindById: string = 'https://api.themoviedb.org/3/movie';
  private urlSearch: string = 'https://api.themoviedb.org/3/search/movie';
  private urlGetPopMovies: string =
    'https://api.themoviedb.org/3/trending/movie/day';
  private readonly token: string =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2Y5YWFlMjkwYmI4NDNkMjFhYjcxYjU4ZTVjYmNhYiIsInN1YiI6IjY0YzAyZTM5OGVlNDljMGZjZmQ2ZWYxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XupYOyaHD35GbOsL7bfzfOMVQg8YvgFK0wXAS0aztsM';

  public listAll(): Observable<Movie[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token,
      }),
    };
    this.http
      .get<Movie[]>(this.urlGetPopMovies, httpOptions)
      .pipe(
        map((response: any) => {
          return response.results.map((movie: any) => ({
            id: movie.id,
            title: movie.title,
            adult: movie.adult,
            popularity: movie.popularity,
            overview: movie.overview,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            genres: movie.genres,
            runtime: movie.runtime,
          }));
        }),
        tap((movies) => this.movieSubject.next(movies)),
        catchError((error: HttpErrorResponse) => {
          console.error('Ocorreu um erro na requisição:', error);
          const errorMessage =
            'Erro ao carregar os dados. Por favor, tente novamente mais tarde.';
          alert(errorMessage);
          return [];
        })
      )
      .subscribe();
    return this.movieSubject.asObservable();
  }

  public search(movie: string): Observable<Movie[] | null> {
    this.router.navigate(['find']);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token,
      }),
    };
    let params = new HttpParams().set('query', movie);
    this.http
      .get<Movie[]>(this.urlSearch, { headers: httpOptions.headers, params })
      .pipe(
        map((response: any) => {
          return response.results.map((movie: any) => ({
            id: movie.id,
            title: movie.title,
            adult: movie.adult,
            popularity: movie.popularity,
            overview: movie.overview,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            genres: movie.genres,
          }));
        }),
        tap((movies) => this.movieSubject.next(movies)),
        catchError((error) => {
          console.error('Error fetching movies:', error);
          return of(null);
        })
      )
      .subscribe();
    return this.movieSubject.asObservable();
  }

  public getMovie(id: number): Observable<Movie> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.http.get<Movie>(`${this.urlFindById}/${id}`, httpOptions);
  }
}
