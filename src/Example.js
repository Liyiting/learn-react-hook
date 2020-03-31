import React, { useState, useEffect } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
  const [haha, setHa] = useState('哈');

  const hahaContent = new Array(count).fill(haha)
  console.log(hahaContent)

  useEffect(() => {
    document.title = `you clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>{hahaContent}</p>
    </div>
  );
}

export default Example