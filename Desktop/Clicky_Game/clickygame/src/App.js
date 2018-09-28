import React, { Component } from 'react';
import './App.css';
import ItemCard from "./components/ItemCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Result from "./components/Result";
import Reset from "./components/Reset";
import items from "./items.json";

function randomize(a) {
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
}

class App extends Component {
  
  state= {
    items,
    resultDisp: "Click an image to start.",
    guessed: [],
    numGuesses: 0,
    score: 0,
    reset: "Reset",
    over: false
  };

  handleShuffle = () => {
    if(!this.state.over) {
      let shuffledItems = randomize(items);
      this.setState(
        {
          shuffledItems
        }
      );
    }
  };

  handleClick = id => {
    if(this.state.guessed.indexOf(id) === -1) {
      this.state.guessed.push(id);
      this.handleCorrect();
    } else {
      this.handleIncorrect();
    }
  }
  

  guessIncrement = () => {
    this.setState(
      {
        numGuesses: this.state.numGuesses + 1
      }
    );
    if(this.state.numGuesses === items.length - 1 || this.state.numGuesses > items.length - 1) {
      this.endGame();
    }
  }

  endGame = () => {
    this.setState(
      {
        resultDisp: "Game over.",
        reset: "Play Again",
        over: true
      }
    );
  }

  handleReset = () => {
    this.setState(
        {
          items,
          resultDisp: "Click an image to start.",
          guessed: [],
          numGuesses: 0,
          score: 0,
          reset: "Reset",
          over: false
      }
    );
  }

  handleCorrect = () => {
    if(!this.state.over) {this.setState(
          {
            resultDisp: "You guessed correctly!",
            score: this.state.score + 1
          }
        );
      this.handleShuffle()
      this.guessIncrement()
    }
  }

  handleIncorrect = () => {
    if(!this.state.over) {this.setState(
          {
            resultDisp: "You already guessed that one.",
            score: 0
          }
        );
        this.handleShuffle();
        this.guessIncrement();
      }
  }

  render() {
    return (
      <Wrapper>
        <Title>Click Game</Title>
        <Result 
        title={this.state.resultDisp}
        score={this.state.score}
        />
        <Reset 
          handleReset={this.handleReset}
          reset={this.state.reset}
        />
        {this.state.items.map(item => (
          <ItemCard
            key={item.id}
            handleClick={this.handleClick}
            id={item.id}
            image={item.image}
            name={item.name}
          />

        ))}        
      </Wrapper>
    );
  }
}

export default App;
