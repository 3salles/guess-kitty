import {
  Tabs,
  TabList as ChakraTabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { UploadContent } from "./atoms/UploadContent";

export const TabList = () => {
  return (
    <Tabs colorScheme="white">
      <ChakraTabList>
        <Tab>Upload</Tab>
        <Tab>Camera</Tab>
      </ChakraTabList>

      <TabPanels>
        <TabPanel>
          <UploadContent />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
