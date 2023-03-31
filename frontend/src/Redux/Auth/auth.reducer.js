import * as types from "./auth.types";

const init={
    
    currentUser: JSON.parse(localStorage.getItem("user"))||{},
    isLoading:false,
    isAuth:localStorage.getItem("token")? true:false,
    isError:false,
    
}

export const reducer = (state=init,{type,payload})=>{
 switch(type){
    case types.AUTH_LOAD:
        return {...state,isLoading:true}
    case types.AUTH_SUCCESS:
        return {...state,isLoading:false,isAuth:true,currentUser:payload}
    case types.AUTH_ERROR:
        return {...state,isError:true,isLoading:false}
    case types.AUTH_LOGOUT:
            return {...state,isAuth:false,currentUser:{}}
    
    default:
        return state;
 }

}
