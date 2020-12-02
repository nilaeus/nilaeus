import { BoxProps, HStack, Icon, IconButton, Link } from "@chakra-ui/react";
import { GitHub, Linkedin, Twitter } from "react-feather";

export const Buttons: React.FC<BoxProps> = (props) => (
  <HStack justify="center" {...props}>
    <Link href="https://github.com/louisbirla">
      <IconButton
        bgColor="black"
        color="white"
        _hover={{
          bgColor: "#444",
        }}
        _active={{
          color: "white.200",
        }}
        aria-label="Louis's GitHub"
        icon={<Icon as={GitHub} />}
      />
    </Link>
    <Link href="https://www.linkedin.com/in/louisbirla/">
      <IconButton
        colorScheme="blue"
        aria-label="Louis's LinkedIn"
        icon={<Icon as={Linkedin} />}
      />
    </Link>
    <Link href="https://twitter.com/louisbirla">
      <IconButton
        colorScheme="blue"
        aria-label="Louis's Twitter"
        icon={<Icon as={Twitter} />}
      />
    </Link>
  </HStack>
);
