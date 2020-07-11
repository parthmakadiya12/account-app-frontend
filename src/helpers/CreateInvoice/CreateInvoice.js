import React from "react";

export function CreateInvoice({ handleChange, createInvoice }) {
  return (
    <div>
      <h2>Add Invoide</h2>
      <label>Type of Invoice </label>
      <br />
      <input
        type="radio"
        onChange={(e) => handleChange(e, "type")}
        id="debit"
        name="gender"
        value="debit"
      />
      <label htmlFor="debit">Debit</label>
      <br />
      <input
        type="radio"
        onChange={(e) => handleChange(e, "type")}
        id="credit"
        name="gender"
        value="credit"
      />
      <label htmlFor="credit">Credit</label>
      <br />
      <label>Amount</label>
      <br />
      <input type="text" onChange={(e) => handleChange(e, "amount")} />
      <br />
      <label>Notes</label>
      <br />
      <input type="text" onChange={(e) => handleChange(e, "note")} />
      <br />
      <button onClick={createInvoice}>Create Invoice</button>
    </div>
  );
}
