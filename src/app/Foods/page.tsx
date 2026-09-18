import React from 'react';

import FoodsCart from '../Components/foods';
import { FoodTypes } from '../AllPostTypes';

const page = async () => {

  const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
  const Foods = await res.json();
  const Food =Foods.data;
  console.log(Food)

  return (
    <div>

    <h2>There is some Foods </h2>
    <div className='grid grid-cols-3 gap-5 p-5 m-5'>
      {
        Food.map((foods:FoodTypes)=> <FoodsCart key={foods.id} foods = {foods}></FoodsCart>)
      }
    </div>
    </div>
  );
};

export default page;