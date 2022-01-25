import {
  Tabs,
  TabList as ChakraTabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export const TabList = () => {
  return (
    <Tabs colorScheme="white">
      <ChakraTabList>
        <Tab>Upload</Tab>
        <Tab>Camera</Tab>
      </ChakraTabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
