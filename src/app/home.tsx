import { Href, Link } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "../styles/index.styles";

const topics = [
  { id: "historia", title: "Historia de los Sistemas Operativos" },
  { id: "arquitectura", title: "Arquitectura, componentes y diseño" }, // <-- Actualizado aquí
  { id: "concurrencia", title: "Procesos y Concurrencia" },
  { id: "gestion", title: "Gestión de Memoria" },
  { id: "seguridad", title: "Sistemas de Archivos y Seguridad" },
  { id: "redes", title: "Redes y Sistemas Distribuidos" },
  { id: "conclusion", title: "Conclusión" },
  { id: "bibliografia", title: "Bibliografía" },
  { id: "acerca", title: "Acerca de" },
] as const;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Índice de Temas</Text>
        </View>

        <View style={styles.hubContainer}>
          {topics.map((item) => (
            <Link
              key={item.id}
              href={`/${item.id}` as Href}
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
