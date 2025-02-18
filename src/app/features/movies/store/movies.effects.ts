import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Movie } from '../models/movies.models';
import { MoviesService } from '../services/movies.service';
import * as MoviesActions from './movies.actions';

@Injectable()
export class MoviesEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly service: MoviesService = inject(MoviesService);

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      exhaustMap(() =>
        this.service.get$().pipe(
          map((entities: Movie[]) => MoviesActions.loadMoviesSuccess({ entities })),
          catchError(() => of(MoviesActions.loadMoviesFailure()))
        )
      )
    )
  );
}
