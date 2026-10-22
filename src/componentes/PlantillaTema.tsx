import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "../styles/temas";

// Definimos los bloques de infrormación
export type BloqueContenido = 
  | { tipo: 'texto' | 'imagen' | 'subtitulo'; contenido: string }
  | { tipo: 'lista'; contenido: string[] };


// estructura completa del tema
export interface TemaData {
  id: string;
  titulo: string;
  bloques: BloqueContenido[];
}

// 3. Le decimos a la plantilla que "data" debe cumplir con la estructura TemaData
interface TemaTemplateProps {
  data: TemaData;
}

export default function TemaTemplate({ data }: TemaTemplateProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.mainTitle}>{data.titulo}</Text>
        
        {data.bloques.map((bloque, index) => {
          if (bloque.tipo === 'texto') {
            return <Text key={index} style={styles.paragraph}>{bloque.contenido}</Text>;
          }
          if (bloque.tipo === 'imagen') {
            return (
              <View key={index} style={styles.imageContainer}>
                <Image source={{ uri: bloque.contenido }} style={styles.image} />
              </View>
            );
          }
          if (bloque.tipo === 'subtitulo') {
            return <Text key={index} style={styles.sectionHeader}>{bloque.contenido}</Text>;
          }

          if (bloque.tipo === 'lista' && Array.isArray(bloque.contenido)) {
         return (
            <View key={index} style={styles.listContainer}>
             {bloque.contenido.map((item, i) => (
              <View key={i} style={styles.bulletRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}
          
          return null; 
        })}
      </ScrollView>
    </SafeAreaView>
  );
}