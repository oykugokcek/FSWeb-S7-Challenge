import React from 'react'

function Kitchens({kitchenList}) {
    const renderedItems = kitchenList.map((kitchen) => {
      return (  <div className='ml-[9px]'>
        <div className='bg-white w-36 flex flex-col items-center rounded-md'>
            <img className= "w-28 h-28 py-2 border-b-2"src = {kitchen.image}/>
            <p className="py-2 font-medium">{kitchen.name}</p>
        </div>
        </div>)
    })
  return (
    <div className='max-w-5xl mx-auto '>
    <h1 className='pt-4 pb-8 text-center text-xl  md:text-left md:p-4 md:pl-[18px]'>Other Kitchens</h1>
    <div className='flex flex-wrap justify-center gap-4'>
      {renderedItems}
    </div>
    </div>
  )
}

export default Kitchens
