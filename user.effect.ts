import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { UserService } from './user.service';
import { createUser, readUser, updateUser, deleteUser } from './user.actions';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private userService: UserService) { }

    createUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createUser),
            mergeMap((action) =>
                this.userService.createUser(action.user).pipe(
                    map(() => readUser())
                )
            )
        )
    );

    readUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(readUser),
            mergeMap(() =>
                this.userService.getUsers().pipe(
                    map((users) => /* Do something with the users */)
                )
            )
        )
    );

    updateUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateUser),
            mergeMap((action) =>
                this.userService.updateUser(action.user).pipe(
                    map(() => readUser())
                )
            )
        )
    );

    deleteUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteUser),
            mergeMap((action) =>
                this.userService.deleteUser(action.id).pipe(
                    map(() => readUser())
                )
            )
        )
    );
}
