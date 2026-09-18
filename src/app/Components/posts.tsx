import { AllPoatsType } from "../AllPostTypes";

export interface PostsProps {
  data: AllPoatsType;
}

const Post = ({ data }: PostsProps) => {
  
  return (
    <div>
      <div className="card bg-primary text-primary-content w-96">
  <div className="card-body">
    <h2 className="card-title">{data.title}</h2>
    <p>{data.body}</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Post;