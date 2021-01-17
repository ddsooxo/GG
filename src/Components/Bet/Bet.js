import React from "react";
import Button from '../Button/Button';

class Bet extends React.Component {
  constructor(props) {
    super(props);
    this.renderAction = this.renderAction.bind(this);
    this.addBet = this.addBet.bind(this);
    this.removeBet = this.removeBet.bind(this);
  }
  renderAction() {
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
          <h2>{this.props.bet.name}</h2>
          <p>
            {" "}
            {this.props.bet.opponent} | ${this.props.bet.wager}{" "}
          </p>
          <Button purpose="Change Bet" onEdit={this.changeBet} id="button2" style="width:33.3%"/>
          <Button purpose="Remove Bet" onRemove={this.removeBet} id="button3" style="width:33.3%"/>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
export default Bet;
