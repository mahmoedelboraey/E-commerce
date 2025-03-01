import { createContext, useState } from "react";
// export context 
export let countContext = createContext()
// fun lazem captal awl 7rf 
export default function CounContextProvider(props){
    let [count,setCount] = useState(10)
    // value more one put it in obj 
    return <countContext.Provider value={{count,setCount}}>
        {props.children}
    </countContext.Provider>
}