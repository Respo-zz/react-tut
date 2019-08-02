import React from 'react';
import JokesData from "./data/JokesData";

class Joke extends React.Component {
  render () {
    const JokeComponents = JokesData.map(joke => {
      return (
        <JokeList key={joke.id} fulljoke={joke} />
      )

    })
    return (
      <div>{JokeComponents}</div>
    )
  }
}

function JokeList(props) {
    return (
        <div>
            <h3 style={{display: !props.fulljoke.question && "none"}}>Question: {props.fulljoke.question}</h3>
            <h3 style={{color: !props.fulljoke.question && "#888888"}}>Answer: {props.fulljoke.punchLine}</h3>
            <hr/>
        </div>
    );
}

export {Joke, JokeList};
