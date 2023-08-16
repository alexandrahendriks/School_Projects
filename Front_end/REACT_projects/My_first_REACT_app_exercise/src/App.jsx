import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";
import { Heading } from "@chakra-ui/react";

export const App = () => {
  const [userDrink, setUserdrink] = useState();
  const greeting = "Welcome to our Winc Café!";
  return (
    <div className="App">
      {userDrink ? (
        <>
          <DrinkChoice drink={userDrink} onClick={setUserdrink} />
        </>
      ) : (
        <>
          <Heading mb={8} fontSize="4xl" color="blue.600">
            {greeting}
          </Heading>
          <DrinkSearch onClick={setUserdrink} />
        </>
      )}
    </div>
  );
};
