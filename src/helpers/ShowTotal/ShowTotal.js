import React from "react";

export function ShowTotal({ debit, credit }) {
  return (
    <div>
      <h3>Show total</h3>
      <label> Credit </label>
      <h4>{credit}</h4>
      <label> Debit </label>
      <h4>{debit}</h4>
    </div>
  );
}
