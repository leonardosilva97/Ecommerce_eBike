import { Box, Button, Center, HStack, Icon, Image, Text } from "native-base";
import React from "react";

import { AntDesign } from "@expo/vector-icons";

export type CardItemProps = {
  image: string;
  title: string;
  price: string;
  amount: string;
};

export function CartItem({ amount, image, price, title }: CardItemProps) {
  return (
    <HStack mt={"30px"}>
      <Center bg={"primary.50"} w={"100px"} h={"90px"} borderRadius={"20px"}>
        <Image
          width={"100%"}
          h={"60px"}
          resizeMode="contain"
          source={{ uri: image }}
          alt="image"
        />
      </Center>
      <Box ml="16px" justifyContent={"space-between"} py={"5px"}>
        <Text bold color={"white"} fontSize={17}>
          {title}
        </Text>
        <HStack alignItems={"center"} mb={"5px"}>
          <Text bold color={"ocean.100"} fontSize={17}>
            R$ {price}
          </Text>
          <HStack
            ml="20px"
            background={"primary.200"}
            p="5px"
            borderRadius={"5px"}
          >
            <Button
              borderRadius={"5px"}
              w={"30px"}
              h={"30px"}
              bg={"coolGray.700"}
              _pressed={{
                backgroundColor: "coolGray.800",
              }}
              onPress={() => {}}
            >
              <Icon as={AntDesign} name="minus" color={"white"} />
            </Button>

            <Center width={"30px"}>
              <Text color={"white"}>{amount}</Text>
            </Center>

            <Button
              borderRadius={"5px"}
              w={"30px"}
              h={"30px"}
              bg={"ocean.50"}
              onPress={() => {}}
            >
              <Icon as={AntDesign} name="plus" color={"white"} />
            </Button>
          </HStack>
        </HStack>
      </Box>
    </HStack>
  );
}
