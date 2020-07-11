import React from "react";

export function InvoiceList({ invoices }) {
  return (
    <>
      {invoices &&
        invoices.map((i) => {
          return (
            <>
              <h3>{i.username}</h3>
              <h3>{i.amount}</h3>
              <h3>{i.type}</h3>
              <h3>{i.note}</h3>
              <hr />
            </>
          );
        })}
    </>
  );
}
