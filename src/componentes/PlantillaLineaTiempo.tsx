import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export interface EventoHistoria {
  id: string;
  anio: string;
  titulo: string;
  descripcion: string;
}

interface PlantillaLineaTiempoProps {
  tituloGeneral: string;
  eventos: EventoHistoria[];
}

export default function PlantillaLineaTiempo({
  tituloGeneral,
  eventos,
}: PlantillaLineaTiempoProps) {
  // Estado para saber qué nodo/evento está seleccionado o abierto
  const [eventoSeleccionado, setEventoSeleccionado] = useState<string | null>(
    null,
  );

  const toggleEvento = (id: string) => {
    setEventoSeleccionado((prev) => (prev === id ? null : id));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainTitle}>{tituloGeneral}</Text>

        <View style={styles.timelineWrapper}>
          {/* Línea vertical negra central */}
          <View style={styles.centralLine} />

          {eventos.map((item, index) => {
            const isOpen = eventoSeleccionado === item.id;
            const isLeft = index % 2 === 0; // Alternar lado izquierdo/derecho en pantallas anchas

            return (
              <View key={item.id} style={styles.itemContainer}>
                {/* Botón circular en el centro de la línea */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[styles.nodeButton, isOpen && styles.nodeButtonActive]}
                  onPress={() => toggleEvento(item.id)}
                >
                  <Text
                    style={[styles.nodeText, isOpen && styles.nodeTextActive]}
                  >
                    {item.anio}
                  </Text>
                </TouchableOpacity>

                {/* Tarjeta de información (se muestra expandida si isOpen es true) */}
                {isOpen && (
                  <View style={styles.card}>
                    <Text style={styles.cardYear}>{item.anio}</Text>
                    <Text style={styles.cardTitle}>{item.titulo}</Text>
                    <Text style={styles.cardDescription}>
                      {item.descripcion}
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 32,
    textAlign: "center",
  },
  timelineWrapper: {
    width: "100%",
    position: "relative",
    alignItems: "center",
  },
  centralLine: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 3,
    backgroundColor: "#000000",
    left: "50%",
    marginLeft: -1.5,
    zIndex: 1,
  },
  itemContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 18,
    zIndex: 2,
  },
  nodeButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#FFFFFF",
    borderWidth: 3,
    borderColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  nodeButtonActive: {
    backgroundColor: "#000000",
    borderColor: "#000000",
  },
  nodeText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#000000",
  },
  nodeTextActive: {
    color: "#FFFFFF",
  },
  card: {
    marginTop: 12,
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardYear: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2563EB",
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
  },
});
