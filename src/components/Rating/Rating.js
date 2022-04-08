
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles"

const Rate = ({curr_ID}) => {
  const [rate, setRate] = useState(0);
  console.log(curr_ID);

  useEffect(() => {
    console.log("CURRENT RATING " + rate);

    const rateValue = JSON.stringify({rate, curr_ID});

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
        return response.json();
      }
      else {
        throw new Error('Something went wrong when saving the rate');
      }
    })
    .catch((error) => {
      console.log(error)
    });
  }, [rate])


  function handleRating(givenRating) {
    if(givenRating == rate)
    {
      setRate(0);
    }
    else
    {
      setRate(givenRating);
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
                console.log("WESH");
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
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