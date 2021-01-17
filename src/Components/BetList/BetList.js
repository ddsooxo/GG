import React from "react";
import "./BetList.css";
import Bet from "../Bet/Bet.js";

class BetList extends React.Component {
  constructor(props) {
    super(props);
  }
  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }
  render() {
    const bets = this.props.bets;
    console.log(bets)
    return (
      <div className="Betlist">
        <input defaultValue={"New Bets"} onChange={this.handleNameChange} />
        <div className="BetList">
          {bets.map((bet) => {
            return (
              <Bet
                bet={bet}
                key={bet.id}
                onAdd={this.props.onAdd}
                onEdit={this.props.onEdit}
                onRemove={this.props.onRemove}
                isRemoval={this.props.isRemoval}
              />
            );
          })}
        </div>
        <button class="Playlist-save" onClick={this.props.onSave}>
          SAVE BET
        </button>
      </div>
    );
  }
}
export default BetList;
