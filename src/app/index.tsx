import { Link } from "expo-router";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function PortadaScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
   {/* ENCABEZADO */}
<View style={styles.headerContainer}>
          {/*Logos en el renglón superior */}
          <View style={styles.logosRow}>
            <Image 
              source={require('../../assets/images/tabIcons/UANL-Logo.png')} 
              style={styles.logoUANL} 
              resizeMode="contain"
            />
            <Image 
              source={require('../../assets/images/tabIcons/fime-logo-negro.png')} 
              style={styles.logoFIME} 
              resizeMode="contain"
            />
          </View>

          {/*Textos institucionales debajo de los logos */}
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTextBold}>Universidad Autónoma de Nuevo León</Text>
            <Text style={styles.headerTextBold}>Facultad de Ingeniería Mecánica y Eléctrica</Text>
          </View>
        </View>

       {/* TÍTULOS DEL PROYECTO */}
        <View style={styles.titlesContainer}>
          <Text style={styles.materiaText}>Sistemas Operativos</Text>
          <Text style={styles.reportTitle}>Reporte de Sistema Operativo</Text>
          <Text style={styles.subReportTitle}>Chrome OS</Text>
          
          {/* Aquí agregas la versión */}
          <Text style={styles.versionText}>Versión: Chrome OS Flex (130 - estable)</Text>
        </View>

        {/* BLOQUE DE DATOS */}
        <View style={styles.infoBlock}>
          <Text style={styles.infoLine}><Text style={styles.bold}>Equipo:</Text> 3</Text>
          <Text style={styles.infoLine}><Text style={styles.bold}>Grupo:</Text> 006</Text>
          <Text style={styles.infoLine}><Text style={styles.bold}>Día:</Text> LMV</Text>
          <Text style={styles.infoLine}><Text style={styles.bold}>Hora:</Text> M6</Text>
          <Text style={styles.infoLine}><Text style={styles.bold}>Catedrático:</Text> Dra. Norma Edith Marín Martínez</Text>
          <Text style={styles.infoLine}><Text style={styles.bold}>Fecha de entrega:</Text> 23 de Octubre 2026</Text>
        </View>

        {/* TABLAS DE INTEGRANTES (Imágenes) */}
        <Image 
          source={require('../../assets/images/tabIcons/integrantes1.png')} 
          style={styles.tablaGrande} 
          resizeMode="contain"
        />

        <Image 
          source={require('../../assets/images/tabIcons/integrantes2.png')} 
          style={styles.tablaPequena} 
          resizeMode="contain"
        />

        <Text style={styles.lugarText}>Lugar San Nicolás de los Garza, Nuevo León</Text>

        {/* BOTÓN PARA IR AL ÍNDICE */}
        <Link href="/disco" style={styles.button}>
          <Text style={styles.buttonText}>Entrar al Proyecto</Text>
        </Link>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Color de fondo oscuro de tu documento
  },
  container: {
    padding: 20,
    alignItems: 'center', // Centra todo el contenido verticalmente por defecto
  },
 // Estilos para el encabezado
headerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
    paddingTop: 0,
  },
  logosRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: -10, 
  },
  logoUANL: {
    width: 120,
    height: 80, 
  },
  logoFIME: {
    width: 140,
    height: 70, 
  },
  headerTextContainer: {
    width: '100%',
  },
  headerTextBold: {
    color: '#1E1E1E', // Mantengo el color oscuro que se ve en tu captura
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  titlesContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  materiaText: {
    color: '#1E1E1E',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  reportTitle: {
    color: '#5B9BD5', 
    fontSize: 22,
    fontWeight: 'bold',
  },
 subReportTitle: {
    color: '#5B9BD5',
    fontSize: 18,
    fontWeight: 'bold',
  },
  versionText: {
    color: '#888888', 
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 5, // Lo separa un poquito del título "Chrome OS"
  },
  infoBlock: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  infoLine: {
    color: '#1E1E1E',
    fontSize: 14,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
 tablaGrande: {
    width: '100%',
    height: 400, 
    marginBottom: -25, // Acerca la segunda tabla
  },
  tablaPequena: {
    width: '100%',
    height: 150, 
    marginBottom: 40,
  },
  lugarText: {
    color: '#1E1E1E',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#1E1E1E',
    fontSize: 16,
    fontWeight: 'bold',
  }
});