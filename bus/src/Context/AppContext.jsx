import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const AppContext=createContext();

export default function AppContextProvider({children}){

const[data,setdata]=useState([])
const[cli,setcli]=useState(false)
  const[bd,setbd]=useState([])
  const [login,setlogin]= useState(false);
  const [cookies, setCookie,removeCookie] = useCookies(['authToken']);
  const [loder,setloder]=useState(false)
  const[read,setread]=useState(true)
  const[admin,setadmin]=useState(false)
const[user,setuser]=useState([])


    const fetchdata= async ()=>{
        
try{

    const res= await fetch("http://localhost:8000/getdata")
    const result=await res.json();
 console.log(result.result)
     setdata(result.result)

  }
  catch{
    console.log("error at fetching data in db")
    setdata([])
  }
  
  }

  useEffect(()=>{
fetchdata()
  },[])
  
    

const value={
data,setdata,
cli,setcli,
bd,setbd,
login,setlogin,
cookies,setCookie,removeCookie,
read,setread,
loder,setloder,
admin,setadmin,
fetchdata,
user,setuser
 
}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}