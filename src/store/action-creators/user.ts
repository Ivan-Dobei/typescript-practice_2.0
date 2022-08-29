import { Dispatch } from "react"
import { ActionState, UserActionTypes } from "../../types/users"


export const fetchUsers = () => {
   return async (dispatch) => {
      try{
         dispatch({ type: UserActionTypes.FETCH_USERS })
      
      } catch (e) {
         dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Error'})
      }
   }
}