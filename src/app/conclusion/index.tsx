import { Href, Link } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "../../styles/index.styles";

const subtemas = [
  { id: "conclusiongeneral", title: "Conclusión general" },
  { id: "conclusionesindividual", title: "Conclusiónes individuales" },
];

export default function GestionIndex() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Conclusión</Text>
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