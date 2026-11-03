import { Link } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "../../styles/index.styles";

const subtemasConcurrencia = [
  { id: "introduccionConcurrencia", title: "Introducción a la Concurrencia" },
  { id: "arquitecturaMultitarea", title: "2.1 Arquitectura Multitarea" },
  { id: "Planificacion", title: "2.2 Planificación de Procesos" },
  { id: "problemaSeleccion", title: "2.3 Problemas de Selección y Exclusión" },
   { id: "Soluciones", title: "2.4 Soluciones Clásicas" },
  { id: "primitivas", title: "2.5 Primitivas de Sincronización" },
  { id: "anomalias", title: "2.6 Anomalías de Concurrencia" },
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
