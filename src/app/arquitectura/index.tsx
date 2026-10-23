import { Href, Link } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "../../styles/index.styles"; // o tu ruta de estilos correspondiente

const subtemasArquitectura = [
  {
    id: "disenoSistemas",
    title: "1.1. Diseño de Sistemas Operativos Modernos",
  },
  {
    id: "arquitecturaInterna",
    title: "1.2. Arquitectura Interna del Sistema Operativo",
  },
  {
    id: "componentesPrincipales",
    title: "1.3. Componentes Principales y Gestión de Recursos",
  },
  {
    id: "clasificacionEstructural",
    title: "1.4. Clasificación Estructural del Sistema Operativo",
  },
  {
    id: "Utilerias",
    title: "1.5. Utilerías del Sistema y Diagnóstico Interno",
  },
];

export default function ArquitecturaIndex() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Arquitectura, componentes y diseño</Text>
        </View>

        <View style={styles.hubContainer}>
          {subtemasArquitectura.map((item) => (
            <Link
              key={item.id}
              href={`/arquitectura/${item.id}` as Href}
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
