import React from "react";
import millify from "millify";
const List = (props) => {
  const { coins, index } = props;
  return (
    <div className="listitem flexrow">
      <p>{index + 1}</p>
      <img src={coins.iconUrl} className="avatar" />
      <p className="coinname">{coins.name}</p>
      <p className="coinname">{`$${millify(coins.price)}`}</p>
      <p className="coinname">{`$${millify(coins.marketCap)}`}</p>
    </div>
  );
};

export default List;
