import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react';



function PizzaForm({data,setData}) {
   


    const {
        register, handleSubmit, reset, formState: {errors}
    } = useForm();

    const saveData = (formData) => {
        const newOrder = {
            size: formData.size,
            gluten: formData.gluten,
            toppings: formData.toppings,
            anythinelse: formData.anythinelse
        }
        setData(newOrder)
        console.log("data", data);
        reset();
      };


  return (
    <div className='max-w-3xl mx-auto pb-8'>
        <form onSubmit={handleSubmit(saveData)}>
       
        <div className='flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-72 pb-4'>
            <div>
                <label className="block font-semibold py-4" htmlFor='size'>Select the size</label>
                <select id="size" {...register("size")}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                </select>
            </div>

            <div className=''>
                <p className="font-semibold py-4">Select gluten option</p>
                <div className='flex gap-2 px-4'>
                    <input className='p-2' id="gluten" {...register("gluten", {required: "Please select gluten option"})} type="radio" value="Gluten" />  
                    <label className=" p-2" htmlFor='gluten'>
                        Gluten
                    </label>
                </div>
                <div className='flex gap-2 px-4'>
                    <input className='p-2' id='gluten-free' {...register("gluten")} type="radio" value="Gluten-free" /> 
                    <label className="p-2" htmlFor='gluten-free'>
                        Gluten-free
                    </label>
                </div>
                </div>
        </div>
        <p className='text-center font-semibold py-4'>Select extra toppings</p>

            <div className='flex flex-wrap justify-between  mx-auto md:w-3/5 '>
            <div className='flex gap-2 px-16 py-2 '>
                <input id="Sausage" type="checkbox" placeholder="a" value="Sausage"{...register("toppings", {required: "Please select toppings", max:{
                    value: 10, 
                    message: "You can choose maximum 10"
                }} )} />
                <label htmlFor= "Sausage"className="w-12">Sausage</label>
            </div>
            <div className='flex gap-2 px-16 py-2'>
                <input id="Salami" type="checkbox" placeholder="a" value="Salami"{...register("toppings", )} />
                <label htmlFor="Salami" className='w-12'>Salami</label>
            </div>
            <div className='flex gap-2 px-16 py-2'> 
                <input id="Pepper" type="checkbox" placeholder="a" value="Pepper"{...register("toppings", )} />
                <label htmlFor="Pepper" className="w-12">Pepper</label>
            </div>
            <div className='flex gap-2 px-16 py-2'>
                <input id="Tomatoes" type="checkbox" placeholder="a" value="Tomatoes"{...register("toppings", )} />
                <label htmlFor="Tomatoes" className="w-12">Tomatoes</label>
            </div>
            <div className='flex gap-2 px-16 py-2'>
                <input id="Broccoli" type="checkbox" placeholder="a" value="Broccoli"{...register("toppings", )} />
                <label htmlFor="Broccoli" className="w-12">Broccoli</label>
            </div>
            <div className='flex gap-2 px-16 py-2'>
                <input id="Mushroom" type="checkbox" placeholder="a" value="Mushroom"{...register("toppings", )} />
                <label htmlFor="Mushroom" className="w-12">Mushroom</label>
            </div>
            <div className='flex gap-2 px-16 py-2'>
                <input id="Onion" type="checkbox" placeholder="a" value="Onion"{...register("toppings", )} />
                <label htmlFor="Onion" className="w-12">Onion</label>
            </div>
            <div className='flex gap-2 px-16 py-2'>
                <input id="Cheddar" type="checkbox" placeholder="a" value="Cheddar"{...register("toppings", )} />
                <label htmlFor="Cheddar" className="w-12"> Cheddar</label>
            </div>
            <div className='flex gap-2 px-16 py-2'>
                <input id="Parmesan" type="checkbox" placeholder="a" value="Parmesan"{...register("toppings", )} />
                <label htmlFor="Parmesan" className="w-12">Parmesan</label>
            </div>
            <div className='flex gap-2 px-16 py-2'>
                <input id="Olive" type="checkbox" placeholder="a" value="Olive"{...register("toppings", )} />
                <label htmlFor="Olive" className="w-12">Olive</label>
            </div>
            </div>
         
         <div className='max-w-xl mx-auto flex flex-col py-8'>
            <label className='block text-center font-semibold py-4' htmlFor='textarea'>Anything Else?</label>
            <textarea className="" id="textarea" {...register("anythingelse?", {})} />
         </div>
           
        
            
         {errors.gluten && (
            <div className="text-red-300 text-sm text-center">
              {errors.gluten.message}
            </div>)}
        {errors.toppings && (
            <div className="text-red-300 text-sm text-center">
              {errors.toppings.message}
            </div>)}
       


      <button className="py-2 mt-4 w-32 mx-auto block font-medium bg-[#5E907C] text-white shadow-md disabled:bg-zinc-400 disabled:text-black"type="submit">Order</button>

     

        </form>
      
    </div>
  )
}

export default PizzaForm
