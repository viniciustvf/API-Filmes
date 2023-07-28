export interface Movie {
  id: number;
  title: string;
  adult: boolean;
  popularity: number;
  overview: string;
  poster_path: string;
  release_date: string;
  genres: any[];
  runtime: number;
}
