import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id,name, job,image, text} = people[index];

  const random = () => {
    let number = Math.floor(Math.random()* people.length);
    //console.log(number)
    if (number === index){
      number = index + 1;
    }
    setIndex(checkNumber(number));
  }

  const checkNumber = (index) => {
    if (index > people.length - 1){
      return 0 ;
    }else if (index < 0){
      return people.length -1 ;
    }else{
      return index;
    }
  }

  const prev = () => {
    setIndex((prev) => {
      let newindex = prev +1
        return checkNumber(newindex);
    })
  }
  const next = () => {
    setIndex((next) => {
      let newindex = next +1
        return checkNumber(newindex);
    })
  }
  return (
      <article className = "review">
          <div className = "img-container">
            <img src={image} alt={name} className = "person-img"/>
            <span className = "quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className = "author">{name}</h4>
          <p className = "job">{job}</p>
          <p className = "info">{text}</p>
          <div>
              <button className = "prev-btn" onClick = {prev} >
                  <FaChevronLeft />
              </button>
              <button className = "next-btn" onClick = {next}>
                  <FaChevronRight />
              </button>
          </div>
          <button className = "random-btn" onClick = {random}>
              Surprise me
          </button>
      </article>
  )
};

export default Review;
