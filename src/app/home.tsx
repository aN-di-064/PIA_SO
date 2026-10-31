import { Href, Link } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "../styles/index.styles";

const topics = [
  { id: "historia", title: "Historia de los Sistemas Operativos" },
  { id: "arquitectura", title: "Unidad 1. Arquitectura, desempeño y tipo de un sistema operativo" }, 
  { id: "concurrencia", title: "Unidad 2. Multitarea: control de concurrencia" },
  { id: "gestion", title: "Unidad 3. Almacenaje: memoria y archivos" },
  { id: "seguridad", title: "Unidad 4. Redes y seguridad: sistemas distribuidos" },
  { id: "conclusion", title: "Conclusión" },
  { id: "bibliografia", title: "Bibliografía" },
  { id: "acerca", title: "Acerca de" },
] as const;

export default function ÍndiceScreen() {
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
