import { Center } from "native-base";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Gradient } from "./Gradient";

type Props = {
  children: React.ReactNode;
  isGradiente?: boolean;
} & TouchableOpacityProps;

export function SquareButton({
  children,
  isGradiente = false,
  ...rest
}: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Center
        shadow={"5"}
        width={"46px"}
        padding={2}
        borderRadius={"10px"}
        h="46px"
        bg="primary.50:alpha.9"
      >
        {isGradiente ? <Gradient>{children}</Gradient> : children}
      </Center>
    </TouchableOpacity>
  );
}
