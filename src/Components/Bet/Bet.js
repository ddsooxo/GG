import React from "react";
import Button from "../Button/Button";
import "./Bet.css";

class Bet extends React.Component {
  constructor(props) {
    super(props);
    this.renderAction = this.renderAction.bind(this);
    this.addBet = this.addBet.bind(this);
    this.removeBet = this.removeBet.bind(this);
  }
  renderAction() {}
  addBet() {
    let newBet = this.props.Bet;
    this.props.onAdd(newBet);
  }
  removeBet() {
    let BetToRemove = this.props.bet;
    this.props.onRemove(BetToRemove);
  }
  render() {
    return (
      <div className="Bet">
        <div className="Bet-information">
          <h2>{this.props.bet.name}</h2>
          <p> {this.props.bet.opponent}</p>
          <p>${this.props.bet.wager} </p>
        </div>
        <button>Change Bet</button>
        <div class="divider" />
        <button onClick={() => this.removeBet()}>Remove Bet</button>
        <br></br>
      </div>
    );
  }
}
export default Bet;
