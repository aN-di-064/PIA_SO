import PlantillaLineaTiempo from "../componentes/PlantillaLineaTiempo";
import { historiaEventos } from "../info/historiaInfo";

export default function HistoriaScreen() {
  return (
    <PlantillaLineaTiempo
      tituloGeneral="Línea del Tiempo: Evolución de los Sistemas Operativos"
      eventos={historiaEventos}
    />
  );
}
