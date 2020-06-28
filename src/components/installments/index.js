import React from "react";

import "./installments.css"


const formattedMoney =  new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

export default function Installments(props){
  
    return(
      <div className="divPeriodos">
          { props.installments.map(installment => (
            <div key={installment.installment} className="divPeriodo">
              <h1>{installment.installment}</h1>
              <div className={(installment.rateMonth > 0 ? 'divPositivo': 'divNegativo')}>
                <p>{formattedMoney.format(installment.amount)}</p>
                <p>{ (props.isPositive ? '+': '') + formattedMoney.format(installment.amountMonth)}</p>
                <p>{installment.rateMonth + '%'}</p>
              </div>
            </div>))
          }
        </div>
    )

  

}