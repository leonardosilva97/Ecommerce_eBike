import React from "react";
import { View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

type Props = {
  children: React.ReactNode;
  leftAction: React.ReactNode;
  handleSwipe: () => void;
};

export function SwipeableButton({ children, handleSwipe, leftAction }: Props) {
  return (
    <View>
      <Swipeable
        rightThreshold={145}
        overshootRight={false}
        onSwipeableLeftOpen={handleSwipe}
        renderLeftActions={() => leftAction}
      >
        {children}
      </Swipeable>
    </View>
  );
}
