"use client";

import React, { useState } from "react";
import './globals.css'

const page = () => {
  const [title, setTitile] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setMaintask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMaintask([...maintask, { title, desc }]);
    setTitile("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...maintask]
    copytask.splice(i,1)
    setMaintask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>;

  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h5 className="text-lg font-medium mr-10 hd">{t.desc}</h5>
          </div>
          <button onClick={()=>{
            deleteHandler(i)
          }} className="bg-red-400 hover:bg-red-600 text-white rounded font-bold px-4 py-2 text-lg mr-10 delete">
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 py-8 text-5xl font-bold text-center tracking-widest mb-10">
        Sanket's TODO App
      </h1>
<div className=" ml-10 hey">
      <form onSubmit={submitHandler}  >
        <input
          type="text"
          className="text-2xl border-zinc-800 border rounded  m-5 px-4 py-2 ml-20 "
          placeholder="Enter Task Here"
          value={title}
          onChange={(e) => setTitile(e.target.value)}
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 border rounded m-5 px-4 py-2 ml-20"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button className="bg-black hover:bg-blue-600 text-white px-4 py-2 text-2xl font-bold rounded m-5 ml-20 add">
          Add Task
        </button>
      </form>
</div>
      <hr className="mt-10"/>
      <div className="p-8 bg-slate-200" >
        <ul className="ml-20">{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
