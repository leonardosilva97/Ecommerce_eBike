import { Box, HStack, Image, Text } from "native-base";
import React from "react";
import { SquareButton } from "../atoms/SquareButton";

import bike from "../../assets/img/categories/subtract.png";
import road from "../../assets/img/categories/road.png";
import helmet from "../../assets/img/categories/helmet.png";
import montain from "../../assets/img/categories/mountain.png";

export function CategoryList() {
  return (
    <Box
      mb="20px"
      mt="5px"
      width={"100%"}
      alignSelf={"center"}
      justifyContent={"space-between"}
    >
      <HStack justifyContent={"space-between"} width={"95px"}>
        <Box ml={"20px"}>
          <SquareButton isGradiente>
            <Text color={"white"}>All</Text>
          </SquareButton>
        </Box>

        <Box ml={"20px"} mt="-10px">
          <SquareButton isGradiente={false}>
            <Image source={bike} alt="icon of a bike" resizeMode="contain" />
          </SquareButton>
        </Box>

        <Box ml={"20px"} mt="-20px">
          <SquareButton isGradiente={false}>
            <Image source={road} alt="icon of a road" resizeMode="contain" />
          </SquareButton>
        </Box>

        <Box ml={"20px"} mt="-30px">
          <SquareButton isGradiente={false}>
            <Image
              source={helmet}
              alt="icon of a helmet"
              resizeMode="contain"
            />
          </SquareButton>
        </Box>

        <Box ml={"20px"} mt="-40px">
          <SquareButton isGradiente={false}>
            <Image
              source={montain}
              alt="icon of a montain"
              resizeMode="contain"
            />
          </SquareButton>
        </Box>
      </HStack>
    </Box>
  );
}
