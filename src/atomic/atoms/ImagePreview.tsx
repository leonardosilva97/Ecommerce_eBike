import React, { useEffect } from "react";
import { View, Image } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type ImagePreviewProps = {
  showDescription: boolean;
  alt: string;
  image: string;
};

export function ImagePreview({
  showDescription = false,
  alt,
  image,
}: ImagePreviewProps) {
  const imageOffset = useSharedValue(showDescription ? 10 : 5);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: imageOffset.value,
        },
      ],
    };
  });

  useEffect(() => {
    imageOffset.value = withTiming(showDescription ? 10 : 5, {
      duration: 400,
    });
  }, [showDescription]);

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: showDescription ? 10 : 25,
        },
      ]}
    >
      <Image
        source={{ uri: image }}
        style={{ width: 300, height: 25, resizeMode: "contain" }}
        alt={alt}
      />
    </Animated.View>
  );
}
