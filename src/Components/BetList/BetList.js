import React from "react";
import "./BetList.css";
import Bet from "../Bet/Bet.js";

class BetList extends React.Component {
  render() {
    const bets = this.props.bets;
    return (
      <div className="listContainer">
        <section>
        </section>
        <div className="Betlist">
          {bets.map((bet) => {
            return (
              <section>
                <Bet
                  bet={bet}
                  id={bet.id}
                  onAdd={this.props.onAdd}
                  onEdit={this.props.onEdit}
                  onRemove={this.props.onRemove}
                />
                <br></br>
              </section>
            );
          })}
        </div>
      </div>
    );
  }
}
export default BetList;
