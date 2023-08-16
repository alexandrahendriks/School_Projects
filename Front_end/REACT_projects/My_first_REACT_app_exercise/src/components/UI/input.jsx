import { Input } from "@chakra-ui/react";
export const TextInput = ({ onChange, ...props }) => {
  return (
    <>
      <Input
        className="text-input"
        variant="filled"
        width="auto"
        onChange={onChange}
        mb={6}
        mt={6}
      />
    </>
  );
};
