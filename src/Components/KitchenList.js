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
            image:"./Images/transparent-chinese-image.png",
            name:"Chinese",
        },
        {
            image:"./Images/transparent-italian-image.png",
            name:"Italian",
        },
        {
            image:"./Images/transparent-mexican-image.png",
            name:"Mexican",
        },
       
    ]
  return (
    <div>
      <Kitchens kitchenList={kitchenList}/>
    </div>
  )
}

export default KitchenList
