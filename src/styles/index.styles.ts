import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Fondo blanco minimalista
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111827",
    letterSpacing: -0.5,
  },
  hubContainer: {
    gap: 12, // Espaciado uniforme entre botones
  },
  // Botones simplificados y más redondeados
  topicCard: {
    backgroundColor: "#F9FAFB", // Gris ultra claro para destacar sutilmente del fondo
    borderRadius: 16, // Bordes bastante redondeados
    borderWidth: 1,
    borderColor: "#E5E7EB", // Borde sutil y limpio
    paddingVertical: 18,
    paddingHorizontal: 16,
    alignItems: "center", // Centra el texto del botón
    justifyContent: "center",
  },
  // Nombre del tema destacado y directo
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    textAlign: "center",
  },
  // Navegación inferior limpia
  bottomNavContainer: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
  },
  bottomNav: {
    flexDirection: "row",
    paddingVertical: 12,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  activeDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#111827",
    marginTop: 4,
  },
});
