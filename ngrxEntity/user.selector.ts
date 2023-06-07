import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userAdapter, UserState } from './user.reducer';

// Lấy trạng thái người dùng từ root state
export const getUserState = createFeatureSelector<UserState>('users');

// Lấy danh sách người dùng
export const getUsers = createSelector(getUserState, userAdapter.getSelectors().selectAll);

// Lấy người dùng theo ID
export const getUserById = (id: string) =>
  createSelector(getUserState, (state) => state.entities[id]);
