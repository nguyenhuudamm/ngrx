import { createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

// Lấy trạng thái người dùng từ trạng thái tổng
export const selectUserState = (state: AppState) => state.users;

// Lấy danh sách người dùng
export const selectUsers = createSelector(
    selectUserState,
    (state: UserState) => state.users
);

// Lấy người dùng dựa trên ID
export const selectUserById = (id: string) =>
    createSelector(selectUsers, (users) => users.find((user) => user.id === id));
