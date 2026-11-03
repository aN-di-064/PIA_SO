import { Href, Link } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "../../styles/index.styles";

const subtemas = [
  {
    id: "gestionMemoria",
    title: "3.1 Gestión de Memoria (Memoria principal y virtual)",
  },
  {
    id: "controlEspacios",
    title: "3.2 Control de espacios disponibles y ocupados",
  },
  {
    id: "memoriaVirtual",
    title: "3.3 Memoria virtual",
  },
  {
    id: "almacenamientoSec",
    title: "3.4 Almacenamiento secundario y tecnologías de persistencia",
  },
  {
    id: "sistemasArchivos",
    title: "3.5 Sistemas de archivos: estructura e implementación en Chrome",
  },
  {
    id: "conclusionGestion",
    title: "Conclusión de Gestión de Memoria y Archivos",
  },
];

export default function GestionIndex() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Gestión de Memoria y Archivos</Text>
        </View>

        <View style={styles.hubContainer}>
          {subtemas.map((item) => (
            <Link
              key={item.id}
              href={`/gestion/${item.id}` as Href}
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
