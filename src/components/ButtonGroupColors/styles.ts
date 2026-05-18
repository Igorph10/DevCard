import { StyleSheet } from "react-native";
import { THEME } from "../../styles/contants";

export const styles = StyleSheet.create({
  buttonGroupContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },

  buttonGroupButtonContainer: {
    borderWidth: 2,
    borderColor: THEME.colors.border.input,
    borderRadius: THEME.border.radius.md,
    paddingHorizontal: 12,
    paddingVertical: 9,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    flex: 1,
  },
  buttonGroupButtonColorIndicator: {
    height: 15,
    width: 15,
    borderRadius: "100%",
  },
  buttonGroupButtonText: {
    color: "#7d7d7d",
    fontWeight: "bold",
  },
});
