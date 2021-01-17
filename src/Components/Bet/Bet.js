import React from "react";

class Bet extends React.Component {
  constructor(props) {
    super(props);
    this.renderAction = this.renderAction.bind(this);
    this.addBet = this.addBet.bind(this);
    this.removeBet = this.removeBet.bind(this);
  }
  renderAction() {
    if (this.props.isRemoval) {
      return <button className="bet-action" onClick={this.removeBet}>-</button>;
    } else {
      return <button className="bet-action" onClick={this.addBet}>+</button>;
    }
  }
  addBet(){
    let newBet = this.props.Bet;
    this.props.onAdd(newBet);
  }
  removeBet() {
    let BetToRemove = this.props.Bet;
    this.props.onRemove(BetToRemove);
  }
  render() {
    return (
      <div className="Bet">
        <div className="Bet-information">
          <h3>{this.props.bet.name}</h3>
          <p>
            {" "}
            {this.props.bet.challenge} | {this.props.bet.amount}{" "}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
export default Bet;
