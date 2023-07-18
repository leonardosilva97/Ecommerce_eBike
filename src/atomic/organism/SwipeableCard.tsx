import { Box, Icon, Text, useTheme } from "native-base";
import React from "react";
import { SwipeableButton } from "../molecules/SwipeableButton";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  text: string;
  width: string;
  handleSwipeable: () => void;
};

export function SwipeableCard({ text, width, handleSwipeable }: Props) {
  const { colors } = useTheme();
  return (
    <Box
      w={width}
      h={"40px"}
      background={"primary.50"}
      justifyContent={"center"}
      borderRadius={"8px"}
    >
      <SwipeableButton
        handleSwipe={handleSwipeable}
        leftAction={
          <Box
            w={width}
            justifyContent={"center"}
            bg={"primary.50"}
            borderRadius={"8px"}
          ></Box>
        }
      >
        <LinearGradient
          style={{
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
          }}
          colors={[colors.ocean[100], colors.purple[100]]}
        >
          <Icon as={AntDesign} name="right" color={"white"} />
        </LinearGradient>
      </SwipeableButton>
      <Text zIndex={-1} color={"white"} left={"50px"} position={"absolute"}>
        {text}
      </Text>
    </Box>
  );
}
