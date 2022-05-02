
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles"
import { useDispatch, useSelector } from "react-redux";
import {saveRate} from "../../store/ratingReducer";
import { useRef } from "react";


const Rate = ({curr_ID, updateRate, currentRate}) => {
  //const [rate, setRate] = useState(0);
  //console.log(curr_ID);
  const dispatch = useDispatch();
  const rate = useSelector((state) => state.rate);
  let rating = rate.rate;
  let test = 3;
  let wola = 0;
  const initialRender = useRef(true);

  console.log(currentRate);

  /*useEffect(() => {
    if(initialRender.current == true) {
    console.log("not initial rendering");
    console.log("CURRENT RATING " + rate.rate);

    console.log("Rating reducer value " + rating);
    const rateValue = JSON.stringify({rating, curr_ID});

    fetch('http://localhost:5000/submitRating', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: rateValue,
    })
    .then((response) => {
      if(response.ok) {
        console.log("wola");
        return response.json();
      }
      else {
        throw new Error('Something went wrong when saving the rate');
      }
    })
    .catch((error) => {
      console.log(error)
    });
  } else {
    console.log("initial rendering");
    initialRender.current = false;
  }
  }, [rate])*/
  
  function submitRateToServer(m_rate) {
    const rateValue = JSON.stringify({m_rate, curr_ID});
    console.log(m_rate);

    fetch('http://localhost:5000/submitRating', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: rateValue,
    })
    .then((response) => {
      if(response.ok) {
        console.log("wola");
        return response.json();
      }
      else {
        throw new Error('Something went wrong when saving the rate');
      }
    })
    .catch((error) => {
      console.log(error)
    });
  }


  function handleRating(givenRating) {
    if(givenRating == rate.rate)
    {
      //setRate(0);
      dispatch(saveRate(0));
      submitRateToServer(0);

    }
    else
    {
      //setRate(givenRating);
      dispatch(saveRate(givenRating));
      submitRateToServer(givenRating);


    }
  }

  console.log(rate);


  
  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={(e) => {
                handleRating(givenRating)
                console.log("Rate updated");
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate.rate || givenRating === rate.rate
                    ? "000"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
        console.log(givenRating);

      })}
    </Container>
  );
};
  
export default Rate;