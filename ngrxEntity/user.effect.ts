import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserService } from './user.service';
import { createUser, readUser, updateUser, deleteUser, loadUsersSuccess, loadUsersFailure } from './user.actions';


@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private userService: UserService) { }

    createUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createUser),
            mergeMap((action) =>
                this.userService.createUser(action.user).pipe(
                    map(() => {
                        // Thực hiện các hành động sau khi tạo người dùng thành công
                        // Ví dụ: hiển thị thông báo, chuyển hướng, vv.
                        return loadUsersSuccess();
                    }),
                    catchError((error) => {
                        // Xử lý lỗi nếu có
                        // Ví dụ: hiển thị thông báo lỗi, vv.
                        return of(loadUsersFailure({ error }));
                    })
                )
            )
        )
    );

    // Thêm các effect khác tương tự cho các hành động còn lại (read, update, delete)
}
