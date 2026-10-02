import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
// Se importa desde temas.ts
import { styles } from "../styles/temas";

export default function HistoriaScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <Text style={styles.mainTitle}>
          Historia de los Sistemas Operativos
        </Text>

        <Text style={styles.paragraph}>
          Los primeros ordenadores no disponían de sistemas operativos. En la
          década de 1950, los programas interactuaban directamente con el
          hardware mediante tarjetas perforadas o tableros de conexiones.
        </Text>

        {/* Bloque gráfico o imagen ilustrativa */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/400x200" }}
            style={styles.image}
          />
        </View>

        <Text style={styles.sectionHeader}>
          Evolución hacia los Sistemas Modernos
        </Text>

        <Text style={styles.paragraph}>
          Con el paso del tiempo, surgió la necesidad de automatizar la
          ejecución de tareas consecutivas, dando origen a los sistemas de
          procesamiento por lotes y posteriormente a la multiprogramación y
          tiempo compartido.
        </Text>

        <Text style={styles.sectionHeader}>
          ¿Cuál fue el impacto de Unix y C?
        </Text>

        <Text style={styles.paragraph}>
          La reescritura de Unix en lenguaje C a principios de los años 70
          permitió que el sistema operativo fuera portable entre diferentes
          arquitecturas de hardware, estableciendo los cimientos de la
          informática moderna.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
