
import axios from "axios";

const useAuth = () => {
    const logIn = async ({email,password}:{email:string,password:string})=> {
try {
    const response = await axios.post('/api/auth/login',{
        email,
        password
    })
    console.log(response);
} catch (error) {
    console.log(error);
    
}
        
    };
    const signUo = async () =>{};

    return {
        logIn,
        signUo
    }
}


export default useAuth;