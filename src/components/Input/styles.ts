import { StyleSheet } from "react-native";
import { THEME } from "../../styles/contants";

export const styles = StyleSheet.create({
  formGroup: {
    flexDirection: "column",
    gap: 8,
  },
  formLabel: {
    color: THEME.colors.heading,
    fontWeight: "bold",
  },
  formInput: {
    borderRadius: THEME.border.radius.md,
    borderWidth: 1,
    borderColor: THEME.colors.border.input,
    backgroundColor: THEME.colors.primary_foreground,
    paddingHorizontal: 12,
    paddingVertical: 8,
    height: 50,
  },
  formError: {
    color: THEME.colors.error,
    fontWeight: "bold",
  },
});