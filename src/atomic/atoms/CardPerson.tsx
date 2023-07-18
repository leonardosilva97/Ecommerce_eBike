import { Box, HStack, Icon, Text } from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

type Props = {
  title: string;
  subTitle: string;
};

export function CardPerson() {
  return (
    <TouchableOpacity>
      <Box
        justifyContent={"center"}
        width={"100%"}
        h={16}
        bg={"primary.50"}
        rounded={"lg"}
        p={"12px"}
      >
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Text color={"white"} fontSize={"md"}>
              Perfil
            </Text>
            <Text color={"white:alpha.50"} fontSize={"sm"}>
              Edite seu perfil
            </Text>
          </Box>
          <Box>
            <Icon as={AntDesign} name="right" color="white" />
          </Box>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
}
