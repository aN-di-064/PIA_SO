import { Href, Link } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "../../styles/index.styles";

const subtemas = [
  { id: "GestionArchivos", title: "Gestión de Memoria (principal y virtual)" },
  { id: "almacenamientoSec", title: "Almacenamiento Secundario y Tecnologías de Persistencia" },
  { id: "sistemasArchivos", title: "Sistemas de Archivos Estructura e Implementación en Chrome OS" },
];

export default function GestionIndex() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Gestión de Memoria</Text>
        </View>

        <View style={styles.hubContainer}>
          {subtemas.map((item) => (
            <Link key={item.id} href={`/gestion/${item.id}` as Href} style={styles.topicCard}>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </Link>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}