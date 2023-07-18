import { Image } from "native-base";
import React from "react";

import detail from "../../assets/img/detail.png";

export function DetailBackground() {
  return (
    <Image
      source={detail}
      alt="detail of home"
      position={"absolute"}
      top={"140"}
      bottom={"0"}
      right={"0"}
    />
  );
}
