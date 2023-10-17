"use client"
import React, { useState } from 'react'

const page = () => {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [MainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
      e.preventDefault()
      setMainTask([...MainTask, {Title, Desc}]);
      setTitle("");
      setDesc("");
  }

  const deleteHandler = (i) => {
    let copyTask = [...MainTask]
    copyTask.splice(i,1);
    setMainTask(copyTask);

  }

  let renderTask = <h2>No Task Available</h2>;
  if (MainTask.length > 0) {
        
  renderTask = MainTask.map((t,i) => {
    return (
      <li className='flex items-center justify-between mb-5' key={i}>
        <div className='flex flex-col w-2/3'>
          <h5 className='text-2xl font-semibold mb-2'>{t.Title}</h5>
          <p className='text-xl mb-4'>{t.Desc}</p>
        </div>
        <button onClick={()=>{
          deleteHandler(i);
        }} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
    );
})

   }
  


  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>M HASSAN MALIK's ToDo List</h1>
    <form onSubmit={submitHandler}>
      <input type="text" 
         value={Title} 
         onChange={(e) => {
          setTitle(e.target.value)
         }} 
         className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2 ' 
         placeholder='Enter Task Here'/>
      <input type="text" 
         value={Desc}
         onChange={(e) => {
          setDesc(e.target.value)
         }}
         className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2 ' 
         placeholder='Enter Description Here'/>
       <button className='bg-black text-white px-4 py-3 m-5 text-2xl font-bold rounded '>Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-200'> 
        <ul> 
          {renderTask}
         </ul>
    </div>
    </>
  )
}

export default page