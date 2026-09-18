import React from 'react';
import { AllPoatsType } from '../AllPostTypes';
import Post from '../Components/posts';

const Posts = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const Data = await res.json();
  return (
    <div>
      <h2>This is Post From Json Placeholder</h2>
      <div className='grid grid-cols-3 gap-5'>
        {
          Data.map((data:AllPoatsType)=> <Post key={data.id} data={data}></Post> )
        }
      </div>
    </div>
  );
};

export default Posts;