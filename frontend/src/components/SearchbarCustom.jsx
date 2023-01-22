import React from 'react'
import {useState} from 'react';
import { MdSearch } from 'react-icons/md';
var contents = require("./testdata.json");

// TODO: add functionality when enter is pressed

export const SearchbarCustom = () => {
  const [data, setData] = useState('');
  const onChange = (event) =>{
    setData(event.target.value);
  } 
  const onSearch = (searchTerm) => {
    setData(searchTerm);
    console.log("searching", searchTerm)
  }

  return (
    <div className="flex bg-white p-2  xs:w-52 -xs:w-36">
      <button onClick={()=>onSearch(data)} className="text-2xl">
        <MdSearch className="hover:text-blueSearch"/>
      </button>
      <div className="">
        <input type="text" value={data} placeholder="Search" className="pl-2 xs:w-44 -xs:w-28" onChange={onChange}/>
        <div className="absolute dropdown">
          {contents.filter(item=>{
            const searchTerm = data.toLowerCase();
            const fullName = item.full_name.toLowerCase();
            return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
          })
          .slice(0,5)
          .map((item)=>{
            return <div key={item.full_name} onClick={()=>onSearch(item.full_name)}className="dropdown-row bg-slate-100 w-56 border-black border-2 xs:w-52 -xs:w-36">{item.full_name}</div>
          })}
        </div>
      </div>
    </div>
  )
}


