"use client"

import { useEffect, useState } from "react"
import css from "./PuttyPage.module.css"
import PuttyList from "@/components/PuttyList/PuttyList.jsx"
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage.jsx"
import Loader from "@/components/Loader/Loader.jsx"
import PuttyFilters from "@/components/PuttyFilters/PuttyFilters.jsx"
import SideBar from "@/components/SideBar/SideBar.jsx"
import { GET } from "@/app/api/putty/route.js"

const PuttyPage = () => {
  const [puttys, setPuttys] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
   
    async function fetchDataPutty() {
      try {
        setIsLoading(true)
        setIsError(false)

        const data = await GET();
       
        
    
      setPuttys(data);
        
      } catch (err) {
        setIsError(true)
    
      } finally {
        setIsLoading(false);
        
   }
    }
   fetchDataPutty ();
    
  }, [])
  

  return (
    <div className={css.pageLayout}>
      <SideBar>
        <PuttyFilters/>
      </SideBar>
      {isLoading && <Loader />}
      {isError && <ErrorMessage/>}
      <PuttyList puttys={ puttys} />
      console.log(puttys);
      
    </div>
  );
}


export default PuttyPage;