import React, {useState, useEffect} from 'react'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';

export const Reviews = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch('https://restaurant-fullstack-api.vercel.app/reviews')
      var responseJson = await response.json(); 
      console.log(Object.values(responseJson));
      //responseJson[1] = responseJson[2];
      //üstteki çalışıyor yani random for loop çek içindekileri değiştir indexleri değil
      
      setReviewData(responseJson);
    }
    fetchReviews();
},[]);

  return (
    <div className="z-30 m-6">
        <h1 className="text-4xl text-center m-8">Reviews from our Customers</h1>
        <div className="justify-center text-center flex flex-row max-w-fit">
        <MdChevronLeft className='w-36 text-6xl bg-slate-300 rounded-full ml-6' />
        <div className='grid grid-cols-3'>
          {Object.keys(reviewData).map((data) => {
            return (
            <div className='justify-self-center w-3/4 bg-slate-300 shadow-md shadow-slate-500 rounded-lg '>
              <div className='flex flex-row'>
                <h1 className='text-xl m-4'>{reviewData[data]["nameSurnameUser"]}</h1>
                <h1 className='ml-auto mx-8 my-4'>{reviewData[data]["rating"]}</h1>
              </div>
              <h1 className='mx-4 mb-4'>{reviewData[data]["reviewData"]}</h1>
            </div>
            )
          })}
        </div>
        <MdChevronRight className='w-36 text-6xl bg-slate-300 rounded-full mr-6' />
        </div>
    </div>
  )
}
