import {
  Avatar,
  Box,
  Center,
  Divider,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { Buttons } from "../components/Buttons";
import { Footer } from "../components/Footer";

const IndexPage = () => (
  <Box>
    <Head>
      <title>Louis Birla</title>
    </Head>
    <Box as="main" minH="100vh">
      <Center px="1rem" textAlign="center" flexDirection="column" pt="5rem">
        <Avatar
          name="Louis Birla"
          src="/head.jpeg"
          aria-label="Picture of Louis used as a profile picture."
          size="2xl"
        />
        <Heading textAlign="center" as="h1" fontSize="4rem">
          Louis Birla
        </Heading>
        <Text>
          High School Student • Loop Founder • Developer • Worldbuilder
        </Text>
        <Buttons mt="2rem" />
      </Center>
      <Divider my="2rem" width="10rem" mx="auto" />
      <Box px={["3rem", "30rem"]}>
        <Heading>Hi! 👋</Heading>
        <Text>
          I'm Louis, a STEM oriented student in Austin, Texas. I've got interest
          in <b>technology</b>, from robots to websites to machine learning.
        </Text>
        <Text mt="1rem">
          In addition to school work, I work on{" "}
          <Link href="https://loop.page" fontWeight="bold">
            Loop
          </Link>
          , a platform for the next evolution of apps. Currently, it is on it's
          way to an MVP, with many talented people putting work into it's
          realization. Learn more at{" "}
          <Link color="blue.400" fontWeight="bold" href="https://loop.page">
            loop.page
          </Link>
          !
        </Text>
        <Text mt="1rem">
          I've always enjoyed worldbuilding, the art of creating cultures,
          languages, planets, and more. A side project I work on is a language
          called "minno", which aims to be an incredibly simple, consistent, and
          innovative language. Find out more at{" "}
          <Link
            color="blue.400"
            fontWeight="bold"
            href="https://minno.birla.io"
          >
            minno.birla.io
          </Link>
          .
        </Text>
      </Box>
    </Box>
    <Footer />
  </Box>
);

export default IndexPage;
