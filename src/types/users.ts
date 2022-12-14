export interface UserState {
   users: any[];
   loading: boolean;
   error: null | string;
}

export enum UserActionTypes {
   FETCH_USERS = 'FETCH_USERS',
   FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
   FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUsersAction {
   type: UserActionTypes.FETCH_USERS
}

interface FetchUsersErrorAction {
   type: UserActionTypes.FETCH_USERS_ERROR,
   payload: string
}

interface FetchusersSuccessAction {
   type: UserActionTypes.FETCH_USERS_SUCCESS,
   payload: any[]
}

export type ActionState =
   FetchUsersAction
   | FetchUsersErrorAction
   | FetchusersSuccessAction;