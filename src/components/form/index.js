import React from "react"
import "./form.css"
import CalculateInterest from "../../helpers/calc-interest";
import InputTax from "../input";

export default function Form(props){
  const [numInstallments, setNumInstalments] = React.useState();
  const [interestRate, setInterestRate] = React.useState();
  const [initAmount, setInitAmount] = React.useState();


   React.useEffect(() => {
    doCreateInstallments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numInstallments, interestRate, initAmount]);

  

  const doCreateInstallments = () => {    
    if (!isNaN(numInstallments) && !isNaN(interestRate) && !isNaN(initAmount) > 0) {
      const newTemp = Array.from({ length: Number(numInstallments) });

      const installments = [];
      newTemp.reduce((acumulador, _, indice) => {
        console.log(acumulador, +initAmount);
        const amount = +CalculateInterest.Calculate(interestRate, acumulador);        
        const incomeAmount = (amount - +initAmount);
        console.log(amount, +initAmount, incomeAmount);
        installments.push({
          installment: indice + 1,
          amount: amount.toFixed(2),
          amountMonth: incomeAmount.toFixed(2),
          rateMonth: (CalculateInterest.CalculateRate(initAmount, incomeAmount)).toFixed(2),
        })
        return acumulador = amount;
      }, initAmount);

      props.onSetInstallments(installments)
    }
  }


    return(
      <div className="divInputs">
          <InputTax lblText="Montante Inicial"
            handleChangeValue={(e) => setInitAmount(e.target.value) } />
          <InputTax lblText="Taxa de juros mensal"
            handleChangeValue={(e) => setInterestRate(e.target.value)} />
          <InputTax lblText="Período (meses)"
            handleChangeValue={(e) => setNumInstalments(e.target.value) } />
        </div>
    )  
  
}