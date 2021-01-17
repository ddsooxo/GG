import React from "react";
import "./assets/css/main.css";
import BetList from "./Components/BetList/BetList";
import BetForm from "./Components/BetForm/BetForm";
import logo1 from "./assets/img/GG-Logo.png";
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bets: [
        {
          name: "fitness challenge",
          wager: 20,
          opponent: "Manuel",
          id: 1,
        },
        {
          name: "DJ music challenge",
          wager: 20,
          opponent: "Dee",
          id: 2,
        },
        {
          name: "Mario Kart Race",
          wager: 20,
          opponent: "Kiran",
          id: 3,
        },
      ],
      previousBets: [
        {
          name: "Staring Contest",
          wager: 20,
          opponent: "myself",
          id: 4,
        },
        {
          name: "Mario Kart Race",
          wager: 20,
          opponent: "Kiran",
          id: 5,
        },
      ],
    };
    this.addBet = this.addBet.bind(this);
    this.changeBet = this.changeBet.bind(this);
    this.removeBet = this.removeBet.bind(this);
  }
  addBet(newBet) {
    this.state.bets.push(newBet);
    this.setState({ bets: this.state.bets });
  }
  changeBet() {}
  removeBet(betToRemove) {
    this.state.bets.forEach((bet) => {
      console.log('BET ID: ' + bet.id);
    })
    this.setState((prevState) => ({
      bets: prevState.bets.filter((bet) => bet.id !== betToRemove.id),
    }));
  }
  render() {
    return (
      <div>
        <title>GG</title>
        <img class='logo' src={logo1} alt="super cool logo"/>
        <br>
        </br>
        <header id="header">
          <h1 className="banner">Competing with your friends for the Greater Good</h1>
        </header>
        <div className="forms">
          <BetForm 
          onAdd={this.addBet}
          bets={this.state.bets}
          />
        </div>
        <section className="BetList">
          <BetList
            betListName={"Current Challenges"}
            bets={this.state.bets}
            onRemove={this.removeBet}
          />
        </section>
      </div>
    );
  }
}
export default App;
