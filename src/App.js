import React from "react";
import "./main.css";
import Button from "./Components/Button/Button";
import BetList from "./Components/BetList/BetList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      bets: [
        {
          name: 'fitness challenge',
          wager: 20,
          opponent: 'Manuel',
          id: 1,
        },
        {
          name: 'DJ music challenge',
          wager: 20,
          opponent: 'Dee',
          id: 2,
        },
        {
          name: 'Mario Kart Race',
          wager: 20,
          opponent: 'Kiran',
          id: 3,
        }
      ],
      previousBets: [
        {
        name: 'Staring Contest',
        wager: 20,
        opponent: 'myself',
        id: 4,
      },
      {
        name: 'Mario Kart Race',
        wager: 20,
        opponent: 'Kiran',
        id: 5,
      }
    ],
    }
    this.addBet = this.addBet.bind(this);
    this.changeBet = this.changeBet.bind(this);
    this.removeBet = this.removeBet.bind(this);
    //this.updateBetName = this.updateBetName.bind(this);
    //this.saveBet = this.saveBet.bind(this);
  }
  addBet(newBet) {
    console.log("Bet added: " + newBet.name);
    this.state.bets.push(newBet);
    this.setState({ bets: this.state.bets });
  }
  changeBet() {}
  removeBet(betToRemove) {
    let isFound = false;
    this.state.bets.forEach((bet) => {
      if (betToRemove.id === betToRemove.id) {
        isFound = true;
      }
    });
    if (isFound) {
      console.log("Bet Removed: " + betToRemove.name);
      this.state.bets.pop(betToRemove);
    }
    this.setState({ bets: this.state.bets });
  }
  render() {
    return (
      <div>
        <title>GG</title>
        <h1>GG</h1>
        <p>Competing with your friends for the Greater Good</p>

        <div className="Action-Buttons">
          <div />
          <Button purpose="Add Bet" onAdd={this.addBet} />
          <div>
          <br></br>
            <Button purpose="Change Bet" onEdit={this.changeBet} />
          </div>
          <br></br>
          <div>
            <Button purpose="Remove Bet" onRemove={this.removeBet} />
          </div>
        </div>
        <section className="BetList">
          <BetList
            betListName={'Current Challenges'}
            bets={this.state.bets}
            onAdd={this.addBet}
            onRemove={this.removeBet}
          />
        </section>
      </div>
    );
  }
}
export default App;
