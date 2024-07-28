import { Text, type TextProps, StyleSheet } from "react-native";
import { normalizePath } from "vite";

export type CustomTextProps = TextProps & {
  type?: "normal" | "title" | "subtitle" | "link";
};

export default function CustomText({
  children,
  style,
  type = "normal",
  ...rest
}: CustomTextProps) {
  return (
    <Text
      style={[
        style,
        type === "normal" ? styles.normal : undefined,
        type === "title" ? styles.title : undefined,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  normal: {
    fontFamily: "Rubik-Regular",
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontFamily: "Rubik-Semibold",
    fontSize: 32,
    color: "white",
    lineHeight: 32,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
