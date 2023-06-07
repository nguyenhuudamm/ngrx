import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

// Tạo người dùng
export const createUser = createAction('[User] Create User', props<{ user: User }>());

// Đọc người dùng
export const readUser = createAction('[User] Read User');

// Cập nhật người dùng
export const updateUser = createAction('[User] Update User', props<{ user: User }>());

// Xóa người dùng
export const deleteUser = createAction('[User] Delete User', props<{ id: string }>());
