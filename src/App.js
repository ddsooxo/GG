import React from "react";
import "./assets/css/main.css";
import Button from "./Components/Button/Button";
import BetList from "./Components/BetList/BetList";
import logo1 from "./assets/img/GG-Logo.png";

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
    console.log("Bet added: " + newBet.name);
    this.state.bets.push(newBet);
    this.setState({ bets: this.state.bets });
  }
  changeBet() {}
  removeBet(betToRemove) {
    this.setState((prevState) => ({
      bets: prevState.bets.filter((bet) => bet.id !== betToRemove.id),
    }));
  }
  render() {
    return (
      <div>
        <title>greater good</title>
        <img class="logo" src={logo1} alt="GG-Logo" />
        <header id="header">
          <h1>greater good</h1>
        </header>
        <div class="v9_1">
          <span class="v9_17">
            be a helping hand for yourself and the world
          </span>
          <span class="v9_15">Sign In</span>
        </div>

        <p>Competing with your friends for the Greater Good</p>
        <div className="btn-group">
          <Button
            purpose="Add Bet"
            onAdd={this.addBet}
            id="btn"
            style="width:33.3%"
          />
        </div>
        <section className="BetList">
          <BetList
            betListName={"Current Challenges"}
            bets={this.state.bets}
            onAdd={this.addBet}
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
