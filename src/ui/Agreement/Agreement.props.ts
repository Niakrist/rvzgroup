import React from "react";

export interface IAgreementProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  color: "grey" | "blue";
  id: "getPriceModal" | "subscribe";
}
