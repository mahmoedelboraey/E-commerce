import { Navigate } from "react-router-dom";

// protect login and register 
export default function AuthView(props){
    // if he login if write in url login not allow it 
    if(localStorage.getItem("user")){
        return <Navigate to={'/home'}/>
    }else{
        return props.children
    }
}