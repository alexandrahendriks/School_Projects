import { Flex } from "@chakra-ui/react";
import { DrinkItem } from "./DrinkItem";
export const DrinkItems = ({ drinks, onClick }) => {
  return (
    <>
      <Flex
        gap={16}
        w={["full", "75%"]}
        justify="center"
        flexWrap="wrap"
        flexDir={["column", "row"]}
        alignItems="center"
      >
        {drinks.map((drink) => (
          <DrinkItem key={drink.id} drink={drink} onClick={onClick} />
        ))}
      </Flex>
    </>
  );
};
