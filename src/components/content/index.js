import React from "react"
import Form from "../form";
import Installments from "../installments";

import "./content.css"


export default function Content() {
  
  const [installments, setInstallments] = React.useState([]);
   
   return (
      <div className="divContent">
        <Form onSetInstallments={ (data) => setInstallments(data) }/>
        <Installments installments={installments} />
      </div>
    );
  

}