import { Navigate } from "react-router-dom"
// hna lo yktb fe url home aw ay 7agah not allow if it is not login 
export default function ProtectedRouter(props){
    if(localStorage.getItem("user")){
        return props.children 
    }else{
        return <Navigate to={'/login'} />
        
    }
}