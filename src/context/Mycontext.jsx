import { createContext, useContext, useEffect, useState } from "react";

 
 const mycontext=createContext();

 const MyContextProvider=({children})=>{
   const [image,setimage]=useState([]);
   const [category,setCategory] = useState('');
   const [query,setQuery] = useState('');

    const fetchimage=async()=>{
      let response =await fetch(`https://pixabay.com/api/?key=47161978-cb5c43c993afba4e2ece3cee8&q=${query}&category=${category}`)
      let data=await response.json();
     // console.log(data.hits);
      setimage(data.hits)
      //console.log(data);
      
    }
    useEffect(()=>{
      fetchimage()
    },[query,category])
  


   
 return(
 
 <mycontext.Provider value={{image,setCategory,setQuery}}>
    {children}
    
     </mycontext.Provider>
 
 )
 
 
 }

 const useMyContext = () => {
  return useContext(mycontext);
 }

 export {mycontext,MyContextProvider,useMyContext}