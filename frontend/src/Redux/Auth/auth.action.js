import { getAuth } from "./auth.api"
import * as types from "./auth.types"


export const postUserData = (UserData) => async(dispatch)=>{

dispatch({type:types.AUTH_LOAD})
try {
    let data = await getAuth(UserData)
   if(data){

       dispatch({type:types.POST_AUTH_SUCCESS,payload:data})
   }
} catch (error) {
    dispatch({type:types.AUTH_ERROR})
}
}
