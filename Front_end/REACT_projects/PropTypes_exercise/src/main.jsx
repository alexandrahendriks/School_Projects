import React from "react";
import ReactDOM from "react-dom/client";
import Person from "./Person";
import "./index.css";

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Person
        name="Johnny"
        age={27}
        address={{
          street: "Zuckerberg Avenue",
          houseNumber: 1,
          city: "San Francisco",
        }}
        hobbies={["playing piano", "cooking", "knitting"]}
        pronoun="He"
      />
      <br />
      <Person
        name="Betti"
        age={29}
        address={{
          street: "Hussels straat",
          houseNumber: 50,
          city: "Venlo",
        }}
        hobbies={["gaming", "cooking", "zumba"]}
      />
    </>
  </React.StrictMode>
);
