import { Href, Link } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "../../styles/index.styles";

const subtemas = [
  { id: "contexto", title: "1. Introducción y contexto tecnológico" },
  { id: "genesis", title: "2. Génesis y lanzamiento inicial" },
  { id: "lanzamiento", title: "3. Lanzamiento comercial y la primera generación de chromebooks" },
  { id: "evolucion", title: "4. Evolución Tecnológica y Hitos de Maduración " },
  { id: "consolidacion", title: "5. Consolidación en el Mercado Actual" }
];

export default function IntroduccionIndex() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Introducción</Text>
        </View>

        <View style={styles.hubContainer}>
          {subtemas.map((item) => (
            <Link key={item.id} href={`/introduccion/${item.id}` as Href} style={styles.topicCard}>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </Link>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}