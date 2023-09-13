import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const ReactPlayground = () => {
  const [data, setData] = useState<Post[]>([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
  console.log(data)
  return (
    <div>
      <h1 className="text-4xl">Posts</h1>
      {data.map(item => (
        <div key={item.id}>
          <h2 className='text-2xl'>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
export default ReactPlayground;