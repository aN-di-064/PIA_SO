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
        <Text style={styles.mainTitle}>Control de concurrencia</Text>

        <Text style={styles.paragraph}>
          Cuando múltiples hilos o procesos se ejecutan al mismo tiempo y
          necesitan leer o modificar la misma memoria compartida, pueden ocurrir
          errores graves de consistencia si no se coordinan adecuadamente.
        </Text>

        {/* Bloque gráfico o imagen ilustrativa */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/400x200" }}
            style={styles.image}
          />
        </View>

        <Text style={styles.sectionHeader}>Riesgos de la Concurrencia</Text>

        <Text style={styles.paragraph}>
          Interbloqueo (Deadlock): Ocurre cuando un grupo de procesos se queda
          bloqueado de forma permanente. Cada proceso retiene un recurso y, al
          mismo tiempo, está esperando indefinidamente a que otro proceso del
          mismo grupo libere el recurso que necesita para continuar.
        </Text>

        <Text style={styles.paragraph}>
          Inanición (Starvation): Se da cuando el planificador del sistema
          operativo nunca le otorga tiempo de CPU o acceso a un recurso a un
          proceso específico (generalmente de baja prioridad) porque siempre hay
          otros procesos acaparando los recursos.
        </Text>

        <Text style={styles.sectionHeader}>
          Requisitos para la Exclusión Mutua
        </Text>

        <Text style={styles.paragraph}>
          El uso adecuado de la concurrencia exige la capacidad de definir
          secciones críticas y hacer cumplir la exclusión mutua de manera
          estricta. Para que cualquier servicio o esquema de proceso concurrente
          sea válido, debe cumplir con seis requisitos fundamentales. En primer
          lugar, la exclusión mutua exige que solo un único proceso tenga
          permiso para entrar en su sección crítica por el mismo recurso u
          objeto compartido en un instante dado. Asimismo, un proceso que se
          interrumpe en una sección no crítica debe hacerlo sin estorbar a los
          demás, y no se le debe permitir demorar indefinidamente a otro
          solicitante, evitando así el interbloqueo y la inanición. Cuando
          ningún proceso ocupa su sección crítica, cualquiera que solicite
          entrar debe poder hacerlo de inmediato y sin dilación. Por otra parte,
          los esquemas no deben hacer suposiciones sobre la velocidad relativa o
          el número de los procesos, bajo el principio de que un proceso
          permanece en su sección crítica únicamente durante un tiempo finito.
        </Text>

        <Text style={styles.sectionHeader}>
          Métodos para Implementar la Exclusión Mutua
        </Text>

        <Text style={styles.paragraph}>
          Para satisfacer los requisitos anteriores, existen tres vías
          principales de diseño. La primera alternativa consiste en dejar la
          responsabilidad enteramente en los propios procesos mediante
          soluciones por software, donde estos se coordinan sin ayuda directa
          del sistema operativo o del lenguaje de programación; aunque son
          propensas a errores y cargas pesadas, su estudio resulta muy útil para
          comprender la complejidad concurrente. Un segundo método propone el
          uso de instrucciones de la máquina para reducir la sobrecarga de
          procesamiento. Finalmente, el tercer método radica en proporcionar un
          soporte directo desde el sistema operativo a través de técnicas
          especializadas orientadas a la sincronización.
        </Text>

        <Text style={styles.sectionHeader}>
          Evolución Histórica: Soluciones por Software y el Algoritmo de Dekker
        </Text>

        <Text style={styles.paragraph}>
          Las soluciones por software se implementan compartiendo memoria
          principal bajo la premisa de que los accesos simultáneos se ejecutan
          en serie mediante un árbitro de memoria. Su evolución se ilustra a
          través de los intentos del algoritmo de Dekker. El primer intento
          utilizaba una variable de turno para lograr una alternancia estricta,
          lo que garantizaba la exclusión mutua pero obligaba a los procesos a
          marchar al ritmo del más lento y provocaba un bloqueo permanente si
          alguno fallaba. El segundo intento introdujo un array de señales donde
          cada proceso consultaba el estado del otro; esto evitaba que un fallo
          externo bloqueara al sistema, pero fallaba en garantizar la exclusión
          mutua ante condiciones de carrera. Un tercer intento alteró el orden
          de las instrucciones para corregir esto, pero introdujo un riesgo
          severo de interbloqueo si ambos procesos activaban su señal
          simultáneamente. El cuarto intento, basado en una cortesía mutua de
          ceder la preferencia, podía derivar en ciclos continuos de inacción
          indefinida. Finalmente, la solución correcta de Dekker logró combinar
          con éxito las variables de señal y turno para ordenar las prioridades
          de acceso de forma segura.
        </Text>

        <Text style={styles.sectionHeader}>El Algoritmo de Peterson </Text>

        <Text style={styles.paragraph}>
          Como una alternativa mucho más simple y elegante frente a la
          complejidad del algoritmo de Dekker, Peterson desarrolló una solución
          optimizada para dos procesos que puede generalizarse fácilmente a un
          número mayor. Este algoritmo emplea de forma conjunta las variables de
          señal y turno para resolver los conflictos de simultaneidad de manera
          limpia y directa. Su diseño demuestra formalmente el cumplimiento de
          la exclusión mutua, al mismo tiempo que impide el interbloqueo y evita
          la inanición, ya que obliga a los procesos a ceder oportunidades de
          acceso mediante la correcta gestión del turno antes de intentar entrar
          en sus respectivas secciones críticas.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
