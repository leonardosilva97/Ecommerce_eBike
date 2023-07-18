import { Button, IButtonProps } from "native-base";
import React from "react";

type Props = {
  title: string;
} & IButtonProps;

export function ButtonDetail({ title, ...rest }: Props) {
  return (
    <Button
      _pressed={{ bgColor: "primary.50" }}
      shadow={1}
      borderRadius={10}
      bg={"primary.10"}
      w={149}
      h={42}
      {...rest}
    >
      {title}
    </Button>
  );
}
