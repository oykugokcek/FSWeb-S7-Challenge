import React from 'react'

const MockupPizza = ({cost}) => {
  return (
    <div className='max-w-4xl mx-auto my-10'>
    <div className='flex flex-col md:flex-row md:pl-24'>
    <img className= "w-60 h-60 mx-auto"src="./Images/neapolitanpizza.jpg"/>
        <div className='flex flex-col px-16 md:px-8 text-center '>
            
            <h1 className='font-bold text-2xl pb-4 pt-1'>Neapolitan Pizza</h1>
            <p className='text-sm md:text-left'>Neapolitan is the original pizza. This delicious pie dates all the way back to 18th century in Naples, Italy. 
                During this time, the poorer citizens of this seaside city frequently purchased food that was cheap and could be eaten quickly. 
                Luckily for them, Neapolitan pizza was affordable and readily available through numerous street vendors. </p>
                <p className='text-sm pt-2 text-[#861411] font-semibold'>Luckily for you, three extra toppings free! </p>
            <p className="text-4xl pt-3">{cost}$ </p>
        </div>
      
    </div>
    </div>
  )
}

export default MockupPizza
