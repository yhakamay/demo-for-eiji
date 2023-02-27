"use client";

import { Inter } from "next/font/google";
import {
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <Heading>Demo for Eiji</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere
        nunc vel est placerat consequat. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Mauris posuere nunc vel est placerat consequat.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere nunc
        vel est placerat consequat.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Mauris posuere nunc vel est placerat consequat.
      </Text>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              posuere nunc vel est placerat consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Mauris posuere nunc vel est
              placerat consequat.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris posuere nunc vel est placerat consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              posuere nunc vel est placerat consequat.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              posuere nunc vel est placerat consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Mauris posuere nunc vel est
              placerat consequat.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text>
              Mauris posuere nunc vel est placerat consequat. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Mauris posuere nunc vel est
              placerat consequat.
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
