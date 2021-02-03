import React from "react";
import "./assets/css/main.css";
import BetList from "./Components/BetList/BetList";
import BetForm from "./Components/BetForm/BetForm";
import './App.css'
import Header from './Components/Header/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bets: [
        {
          name: "You are betting with @dee_unicorn",
          wager: 20,
          opponent: "Dee",
          id: 4,
        },
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
        <br>
        </br>
        <Header />
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

        <div class="footer">
          <span>
            <a class="footer-about" href="">
              {" "}
              About{" "}
            </a>
          </span>

          <a class="footer-contact" href="">  Contact  </a>
          <p> made with love + hard work | © HackingHornets </p>
        </div>
      </div>
    );
  }
}
export default App;
