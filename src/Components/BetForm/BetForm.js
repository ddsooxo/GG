import React from "react";
import Button from "../Button/Button";

class BetForm extends React.Component {
  constructor(props) {
    super(props);
  }
  handleTermChange(e) {
  }
  addBet() {
    //let newBet = this.props.bet;
    //this.props.onAdd(newBet);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addBet()}>
          <label>OPPONENT</label>
          <input placeholder="Name" onChange={this.handleTermChange} />
          <label>CHALLENGE</label>
          <input placeholder="Challenge" onChange={this.handleTermChange} />
          <label>CHARITABLE WAGER</label>
          <input placeholder="Wager" onChange={this.handleTermChange} />
          <Button purpose="Add Bet" onAdd={this.addBet} />
        </form>
      </div>
    );
  }
}
export default BetForm;
