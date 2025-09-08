"use client"

// import { useEffect, useState } from "react"
// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx"
// import Loader from "../../components/Loader/Loader.jsx"
// import PuttyFilters from "../../components/PuttyFilters/PuttyFilters.jsx"
// import PuttyList from "../../components/PuttyList/PuttyList.jsx"
// import SideBar from "../../components/SideBar/SideBar.jsx"
// import { fetchPutty } from "../../components/services/api.js"
// import css from "./PuttyPage.module.css"

const CatalogPage = () => {
    

  

  return (
    <div >
      <h2>Каталог товарів</h2>

      {/* <SideBar>
        <PuttyFilters/>
      </SideBar>
      {isLoading && <Loader />}
      {isError && <ErrorMessage/>}
      <PuttyList puttys={ puttys} />
      console.log(puttys); */}
        <a href="/catalog/ceiling">Стелі</a>

        <a href="/catalog/putty">Шпаклівки</a>
        

      
      
    </div>
  );
}


export default CatalogPage;