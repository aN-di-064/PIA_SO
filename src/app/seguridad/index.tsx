import { Href, Link } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "../../styles/index.styles";

const subtemas = [
  { id: "conectividadRed", title: "4.1 Conectividad de red en ChromeOS" },
  { id: "amenazasRed", title: "4.2 Amenazas de seguridad en redes" },
  { id: "malware", title: "4.3 Malware y amenazas informáticas" },
  { id: "intrusosAtaques", title: "4.4 Tipos de intrusos y ataques" },
  { id: "autenticacion", title: "4.5 Autenticación y control de acceso" },
  { id: "seguridadConexiones", title: "4.6 Seguridad de las conexiones" },
  { id: "seguridadConexionesDetalle", title: "4.7 Seguridad de las conexiones II" },
  { id: "mecanismosSeguridad", title: "4.8 Mecanismos de seguridad de ChromeOS" },
  { id: "perdidaRobo", title: "4.9 Seguridad del dispositivo frente a pérdida o robo" },
  { id: "nivelesSeguridad", title: "4.10 Niveles de seguridad según el entorno" },
  { id: "administracionRiesgos", title: "4.11 Prevención y administración de riesgos" },
  { id: "limitacionesSeguridad", title: "4.12 Problemas y limitaciones de seguridad" },
  { id: "buenasPracticas", title: "4.13 Soluciones y buenas prácticas" },
   { id: "conclusionredes", title: "Conclusión de Redes y seguridad: sistemas distribuidos" },
   { id: "AF4", title: "Actividad Fundamental 4." },
];

export default function SeguridadIndex() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Redes y Seguridad</Text>
        </View>

        <View style={styles.hubContainer}>
          {subtemas.map((item) => (
            <Link key={item.id} href={`/seguridad/${item.id}` as Href} style={styles.topicCard}>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </Link>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}