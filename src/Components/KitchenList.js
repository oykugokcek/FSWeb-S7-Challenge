import React from 'react'
import Kitchens from './Kitchens'

function KitchenList() {
    const kitchenList = [
        {
            image:"./Images/transparent-hamburger-image.png",
            name:"Hamburger",
        },
        {
            image:"./Images/transparent-chicken-image.png",
            name:"Chicken",
        },
        {
            image:"./Images/transparent-street-delicies.png",
            name:"Street Delicies",
        },
        {
            image:"./Images/transparent-hamburger-image.png",
            name:"Hamburger",
        },
        {
            image:"./Images/transparent-chicken-image.png",
            name:"Chicken",
        },
        {
            image:"./Images/transparent-street-delicies.png",
            name:"Street Delicies",
        },
       
    ]
  return (
    <div>
      <Kitchens kitchenList={kitchenList}/>
    </div>
  )
}

export default KitchenList
