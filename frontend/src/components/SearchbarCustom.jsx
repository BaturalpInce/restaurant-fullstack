import React, {useState, useEffect} from 'react'
import { MdSearch } from 'react-icons/md';
import { mainDishNames } from "./MainDishes"
import { dessertNames } from './Desserts';
import { drinkNames } from './Drinks';

// TODO: add functionality when enter is pressed
export const SearchbarCustom = () => {
  const [data, setData] = useState("");
  const [contents, setContents] = useState([]);
  var count = 0;

  const onChange = (event) =>{
    setData(event.target.value);
  } 
  const onSearch = (searchTerm) => {
    setData(searchTerm);
    //console.log("searching", searchTerm);
    const scroll = (searchTerm) => {
      //const find = searchTerm.replace(/\s+/g, '');
      let find = searchTerm.replaceAll("'", '');
      find = find.replaceAll(" ", "");
      const section = document.querySelector('#'+find);
      section.scrollIntoView({behavior:'smooth', block:'center'});
    }
    scroll(searchTerm);
  }

  useEffect(()=>{
    var a = mainDishNames.concat(dessertNames);
    var b = a.concat(drinkNames);
    b = [...new Set(b)];
    setContents(b);    
  },[]);

  return (
    <div className="flex bg-white p-2  xs:w-52 -xs:w-36">
      <button onClick={()=>onSearch(data)} className="text-2xl">
        <MdSearch className="hover:text-blueSearch"/>
      </button>
      <div className="">
        <input type="text" value={data} placeholder="Search" className="pl-2 xs:w-44 -xs:w-28" onChange={onChange}/>
        <div className="absolute dropdown">
          {contents.filter(item=>{
            count = count + 1;
            const searchTerm = data.toLowerCase();
            const fullName = item.toLowerCase();
            return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
          })
          .slice(0,5)
          .map((item)=>{
            return <div key={item+count} onClick={()=>onSearch(item)} className="dropdown-row bg-slate-100 w-56 border-black border-2 xs:w-52 -xs:w-36">{item}</div>
          })}
        </div>
      </div>
    </div>
  )
}


