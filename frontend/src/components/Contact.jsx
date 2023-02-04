import React, { useState } from 'react'

export const Contact = () => {
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState("");
  const [revdata, setRevdata] = useState("");


  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  }
  const onChangeRating = (event) => {
    setRating(event.target.value);
  }
  const onChangeRevdata = (event) => {
    setRevdata(event.target.value);
  }
  const submitAll = () => {
    console.log(username);
    console.log(rating);
    console.log(revdata);

  }
  return (
    <>
        <div className='max-w-lg mx-auto my-auto h-screen flex flex-col justify-center'>
        <div>
        <h1 className='text-3xl text-center'>Contact Us</h1>
        <div className='max-w-xs m-auto mt-8'>
        <form>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="userNameSurname" id="username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={onChangeUsername} />
                <label htmlFor="userNameSurname" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name and Surname</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="rating" id="rating" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={onChangeRating}/>
                <label htmlFor="rating" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rating</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="reviewdata" id="reviewdata" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={onChangeRevdata} />
            <label htmlFor="reviewdata" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Share your thoughts</label>
            </div>
            <div className='text-center mt-10'>
              <button type="button" className="text-black bg-slate-300 hover:bg-slate-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center m-auto" onClick={submitAll}>Submit</button>
            </div>
        </form>
        </div>
        </div>
        </div>
    </>

  )
}
