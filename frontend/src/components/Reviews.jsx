import React, {useState, useEffect, Fragment} from 'react'
import { MdStarRate } from 'react-icons/md';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export const Reviews = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const shuffleResponse = ( resp ) => {
      const lenghtOfResp = Object.keys(resp).length;
      for (var i = lenghtOfResp - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      
      // Block for shuffling all usernames
      var tempUserName = resp[i]["nameSurnameUser"];
      resp[i]["nameSurnameUser"] = resp[j]["nameSurnameUser"];
      resp[j]["nameSurnameUser"] = tempUserName;
      
      // Block for shuffling all ratings
      var tempRating = resp[i]["rating"];
      resp[i]["rating"] = resp[j]["rating"];
      resp[j]["rating"] = tempRating;

      // Block for shuffling review data
      var tempReviewData = resp[i]["reviewData"];
      resp[i]["reviewData"] = resp[j]["reviewData"];
      resp[j]["reviewData"] = tempReviewData;
    }
    return resp;
    }

    const fetchReviews = async () => {
      const response = await fetch('https://restaurant-fullstack-api.vercel.app/reviews')
      var responseJson = await response.json(); 
      console.log(Object.values(responseJson));
      const shuffledJson = await shuffleResponse(responseJson);
      //responseJson[1] = responseJson[2];
      //üstteki çalışıyor yani random for loop çek içindekileri değiştir indexleri değil
      
      setReviewData(shuffledJson);
    }
    fetchReviews();
},[]);

  return (
    <div className="z-30 m-6">
        <h1 className="text-4xl text-center m-8">Reviews From Our Customers</h1>
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300:{
            slidesPerView: 1,
          },
          700:{
            slidesPerView: 2,
          },
          950:{
            slidesPerView: 3
          }
        }}
        modules={[Pagination]}
      >
          {Object.keys(reviewData).map((data) => {
            return (
            <SwiperSlide className='mb-12 justify-self-center bg-slate-300 shadow-md shadow-slate-500 rounded-lg'>
              <div className='flex flex-row'>
                <h1 className='text-xl m-4'>{reviewData[data]["nameSurnameUser"]}</h1>
                <div className="flex flex-row ml-auto m-4">{reviewData[data]["rating"]==5 ? <><MdStarRate/><MdStarRate/><MdStarRate/><MdStarRate/><MdStarRate/></> : 
                  reviewData[data]["rating"]==4 ? <><MdStarRate/><MdStarRate/><MdStarRate/><MdStarRate/></>: 
                  reviewData[data]["rating"]==3 ? <><MdStarRate/><MdStarRate/><MdStarRate/></>
                  : reviewData[data]["rating"]==2 ? <><MdStarRate/><MdStarRate/></> :
                  reviewData[data]["rating"]==1 ?  <><MdStarRate/></> :
                  "No Star"
                }</div>
              </div>
              <h1 className='mx-4 mb-4'>{reviewData[data]["reviewData"]}</h1>
            </SwiperSlide>
            )
          })}
        </Swiper>
    </div>
  )
}
