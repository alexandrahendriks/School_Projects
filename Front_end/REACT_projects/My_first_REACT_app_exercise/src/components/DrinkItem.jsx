import { Center, Image, Text } from "@chakra-ui/react";

export const DrinkItem = ({ drink, onClick }) => {
  return (
    <Center
      gap={5}
      mb={4}
      cursor={"pointer"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={() => onClick(drink)}
    >
      <Image src={drink.imgUrl} width={50} height="auto" alt={drink.alt} />
      <Text fontFamily={"Times New Roman"} color="blue.800">
        {drink.name}
      </Text>
    </Center>
  );
};
