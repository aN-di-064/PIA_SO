import { Link } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "../../styles/index.styles";

const subtemasConcurrencia = [
  { id: "introduccionConcurrencia", title: "Introducción a la Concurrencia" },
  { id: "arquitecturaMultitarea", title: "Arquitectura Multitarea" },
  { id: "Planificacion", title: "Planificación de Procesos" },
  { id: "anomalias", title: "Anomalías de Concurrencia" },
  { id: "problemaSeleccion", title: "Problemas de Selección y Exclusión" },
  { id: "primitivas", title: "Primitivas de Sincronización" },
  { id: "Soluciones", title: "Soluciones Clásicas" },
] as const;

export default function ConcurrenciaIndexScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Procesos y Concurrencia</Text>
        </View>

        <View style={styles.hubContainer}>
          {subtemasConcurrencia.map((item) => (
            <Link
              key={item.id}
              href={`/concurrencia/${item.id}` as any}
              style={styles.topicCard}
            >
              <Text style={styles.cardTitle}>{item.title}</Text>
            </Link>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
