import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { User } from './user.model';
import { createUser, readUser, updateUser, deleteUser } from './user.actions';

export interface UserState extends EntityState<User> {}

export const userAdapter = createEntityAdapter<User>();

export const initialState: UserState = userAdapter.getInitialState();

export const userReducer = createReducer(
  initialState,
  on(readUser, (state) => state),
  on(createUser, (state, { user }) => userAdapter.addOne(user, state)),
  on(updateUser, (state, { user }) => userAdapter.updateOne({ id: user.id, changes: user }, state)),
  on(deleteUser, (state, { id }) => userAdapter.removeOne(id, state))
);
