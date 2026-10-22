import TemaTemplate from "../componentes/PlantillaTema";
import { gestionData } from "../info/gestionInfo";

export default function GestionScreen() {
  return <TemaTemplate data={gestionData} />;
}