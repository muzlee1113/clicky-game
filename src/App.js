import React from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import girls from "./girls.json"
import "./App.css";




class App extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    girls: girls
  }

  shuffleGirls = (array) => {
    // some shuffle array function according to Fisher-Yates shuffle
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  

  handleClick = (id) => {
    let thegirl = this.state.girls.find(girl => (girl.id === id))
    if (thegirl.clicked) {
      //end the game
      this.endGame()
    } else {
      let updatedGirls = this.state.girls.map(girl => {
        if (girl.id === id) {
          // set the girl's clicked boolean to true
          girl.clicked = true
        }
        return girl
      })
      // call the next round function to update score, and girls arr
      this.nextRound(updatedGirls)
    }
  }

  nextRound = (updatedgirls) => {
    this.setState({
      score: this.state.score + 1,
      girls: this.shuffleGirls(updatedgirls)
    })
  }

  endGame = () => {
    // turn all booleans back to false
    girls.map(girl=>girl.clicked=false)
    if (this.state.score > this.state.topScore) {
      this.setState({
        // set the top score
        topScore: this.state.score,
        // reset the score
        score: 0,
        // reset state.girls
        girls: this.shuffleGirls(girls)
      })
    }else{
      this.setState({
        // reset the score
        score: 0,
        // reset state.girls
        girls: this.shuffleGirls(girls)
      })
    }
    alert("You lose! Try again!")
  }


  render() {
    return (<>
      <Header score={this.state.score} topScore={this.state.topScore} />
      <Jumbotron />
      <div className="imgcard">
        {this.state.girls.map(girl => {
          return (
            <Cards
              key={girl.id}
              id={girl.id}
              img={girl.img}
              clicked={girl.clicked}
              handleClick={this.handleClick}
            />
          )
        }
        )}
      </div>
      <Footer />
    </>)
  }
}

export default App;
