import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
    marginTop: 24,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 24,
    marginBottom: 16,
    fontStyle: "normal",
  },
  quoteText: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 22,
    marginBottom: 20,
    paddingLeft: 12,
    borderLeftWidth: 3,
    borderLeftColor: "#3B82F6",
  },
  imageContainer: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    backgroundColor: "#0F172A",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
