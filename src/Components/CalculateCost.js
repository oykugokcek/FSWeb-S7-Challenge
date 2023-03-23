import React from 'react'
import { useEffect } from 'react'

const CalculateCost = ({data, cost, setCost}) => {

    useEffect(() => {
        calculatingCost();
    }, [data])

    function calculatingCost() {
        let sizeCost=8;
        let glutenCost=0;
        let toppingCost=0;
        if(data.size === "Large")
        {
            sizeCost=12;
        } else if (data.size==="Medium") {
            sizeCost=10;
        } 

       if(data.gluten === "Gluten-free"){
        glutenCost=5;
       }

       if(data.toppings.length > 3) {
        toppingCost = data.toppings.length - 3;
       }
        cost = sizeCost + glutenCost + toppingCost;
        setCost(cost)
        console.log(cost)
    }


  return (
    <div>
        
    </div>
  )
}

export default CalculateCost
