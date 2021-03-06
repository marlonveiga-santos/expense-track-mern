import React, { useContext } from "react";
import { container } from "./theme";
import { cTheme, textColor, textPositive, textNegative} from "../../context/GlobalTheme";
import {numberWithCommas} from '../../utils/format';

import { GlobalContext } from "../../context/GlobalState";

const Balance = () => {
  const { transactions, theme } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div style={(container, cTheme(theme, textColor))}>
      <h4>Your Balance</h4>
      <h1 style={total>= 0? textPositive:textNegative}>${numberWithCommas(total)}</h1>
    </div>
  );
};

export default Balance;
