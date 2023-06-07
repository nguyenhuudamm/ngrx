import { createReducer, on } from '@ngrx/store';
import { createUser, readUser, updateUser, deleteUser } from './user.actions';
import { User } from './user.model';

export interface UserState {
    users: User[];
}

export const initialState: UserState = {
    users: []
};

export const userReducer = createReducer(
    initialState,
    on(readUser, (state) => state), // Thực hiện thao tác đọc người dùng

    on(createUser, (state, { user }) => {
        return {
            ...state,
            users: [...state.users, user]
        };
    }),

    on(updateUser, (state, { user }) => {
        const updatedUsers = state.users.map((u) => u.id === user.id ? user : u);
        return {
            ...state,
            users: updatedUsers
        };
    }),

    on(deleteUser, (state, { id }) => {
        const updatedUsers = state.users.filter((u) => u.id !== id);
        return {
            ...state,
            users: updatedUsers
        };
    })
);
