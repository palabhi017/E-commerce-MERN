import axios from "axios";
export const getAuth= async(UserData)=>{

    try {
        let res = await axios.post(`http://localhost:8080/user/login`,UserData)
      
        return res.data;
        
    } catch (error) {
        return error;
    }
}