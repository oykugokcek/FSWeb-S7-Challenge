import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react';

function PizzaForm({data,setData}) {
   
    const {
        register, handleSubmit, reset
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
    <div className='flex max-w-sm mx-auto'>
        <form onSubmit={handleSubmit(saveData)}>
            <div>
        <label className="block" htmlFor='size'>Select the size</label>
        <select id="size" {...register("size")}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      </div>
        <div className='w-4/5'>
            <div className='flex gap-2 px-4'>
            <input className='p-2' id="gluten" {...register("gluten")} type="radio" value="Gluten" />  
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

            <div className='flex flex-wrap gap-4 w-4/5'>
            <div className='flex gap-2 px-4'>
                <input id="Sausage" type="checkbox" placeholder="a" value="Sausage"{...register("toppings", {max: 10})} />
                <label htmlFor= "Sausage"className="w-12">Sausage</label>
            </div>
            <div className='flex gap-2 px-4'>
                <input id="Salami" type="checkbox" placeholder="a" value="Salami"{...register("toppings", {max: 10})} />
                <label htmlFor="Salami" className='w-12'>Salami</label>
            </div>
            <div className='flex gap-2 px-4'> 
                <input id="Pepper" type="checkbox" placeholder="a" value="Pepper"{...register("toppings", {max: 10})} />
                <label htmlFor="Pepper" className="w-12">Pepper</label>
            </div>
            <div className='flex gap-2 px-4'>
                <input id="Tomatoes" type="checkbox" placeholder="a" value="Tomatoes"{...register("toppings", {max: 10})} />
                <label htmlFor="Tomatoes" className="w-12">Tomatoes</label>
            </div>
            <div className='flex gap-2 px-4'>
                <input id="Broccoli" type="checkbox" placeholder="a" value="Broccoli"{...register("toppings", {max: 10})} />
                <label htmlFor="Broccoli" className="w-12">Broccoli</label>
            </div>
            <div className='flex gap-2 px-4'>
                <input id="Mushroom" type="checkbox" placeholder="a" value="Mushroom"{...register("toppings", {max: 10})} />
                <label htmlFor="Mushroom" className="w-12">Mushroom</label>
            </div>
            <div className='flex gap-2 px-4'>
                <input id="Onion" type="checkbox" placeholder="a" value="Onion"{...register("toppings", {max: 10})} />
                <label htmlFor="Onion" className="w-12">Onion</label>
            </div>
            <div className='flex gap-2 px-4'>
                <input id="Cheddar" type="checkbox" placeholder="a" value="Cheddar"{...register("toppings", {max: 10})} />
                <label htmlFor="Cheddar" className="w-12"> Cheddar</label>
            </div>
            <div className='flex gap-2 px-4'>
                <input id="Parmesan" type="checkbox" placeholder="a" value="Parmesan"{...register("toppings", {max: 10})} />
                <label htmlFor="Parmesan" className="w-12">Parmesan</label>
            </div>
            <div className='flex gap-2 px-4'>
                <input id="Olive" type="checkbox" placeholder="a" value="Olive"{...register("toppings", {max: 10})} />
                <label htmlFor="Olive" className="w-12">Olive</label>
            </div>
         
         <div>
            <label htmlFor='textarea'>Anything Else?</label>
            <textarea id="textarea" {...register("anythingelse?", {})} />
         </div>
           
        
            
          
        </div>


      <button type="submit">Save</button>
        </form>
      
    </div>
  )
}

export default PizzaForm
