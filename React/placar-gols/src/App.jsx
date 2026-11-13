import { useState } from "react";
import { Header } from "./components/Header"
import { Gols } from "./components/GolsContent"
import { Footer } from "./components/Footer";
import { Placar } from "./components/PlacarContent";
import styles from "./App.module.css"
import argentina from "./components/images/argentina.png";
import brasil from "./components/images/brasil.png"

export function App() {

  const [golsBrasil, setGolsBrasil] = useState(0);
  const [golsArgentina, setGolsArgentina] = useState(0);

  function compararPlacar(placarBrasil, placarArgentina) {
    if (placarBrasil > placarArgentina) {
      return "Brasil";
    } else if (placarArgentina > placarBrasil) {
      return "Argentina";
    } else {
      return "Empate";
    }
  }

  const vencedor = compararPlacar(golsBrasil, golsArgentina);
  const jogoComecou = golsBrasil + golsArgentina > 0;

  return (
    <div>
      <Header />
      <Placar vencedor={vencedor} jogoComecou={jogoComecou} />
      <div className={styles.gols}>
        <div>
          <Gols
            time="Brasil"
            urlImage={brasil}
            placar={golsBrasil}
            onGol={() => setGolsBrasil(golsBrasil + 1)}
          />
        </div>
        <div>
          <Gols
            time="Argentina"
            urlImage={argentina}
            placar={golsArgentina}
            onGol={() => setGolsArgentina(golsArgentina + 1)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
