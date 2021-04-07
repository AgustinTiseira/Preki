import {createContext,useState} from 'react';

export default (props) =>{
    const [search,setSearch] = useState("mochilas");
    return (            
            <AppContext.Provider value={[search,setSearch]}>
                {props.children}
            </AppContext.Provider>  
    );
}

export const AppContext = createContext();