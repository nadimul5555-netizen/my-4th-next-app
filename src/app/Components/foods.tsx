import Image from "next/image";
import { FoodTypes } from "../AllPostTypes";

export type foodsCartProps = {
  foods: FoodTypes
}

const FoodsCart = ({foods}: foodsCartProps) => {
  
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{foods.category}</h2>
    <p>{foods.dish_name}</p>
  </div>
  <figure>
    <Image src={foods.image_link} height={400} width={400} alt="Food image"></Image>
  </figure>
</div>
    </div>
  )
}

export default FoodsCart;