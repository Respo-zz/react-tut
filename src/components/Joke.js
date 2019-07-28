import React from 'react';
import JokesData from "./data/JokesData";

const JokeComponents = JokesData.map(joke => {
  return (
    <Joke key={joke.id} fulljoke={joke} />
  )

})

function Joke(props) {
    return (
        <div>
            <h3 style={{display: !props.fulljoke.question && "none"}}>Question: {props.fulljoke.question}</h3>
            <h3 style={{color: !props.fulljoke.question && "#888888"}}>Answer: {props.fulljoke.punchLine}</h3>
            <hr/>
        </div>
    );
}

export {Joke, JokeComponents};
