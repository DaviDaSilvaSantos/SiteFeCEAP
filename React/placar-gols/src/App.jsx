import { Header } from "./components/Header"
import { Gols } from "./components/GolsContent"
import { Footer } from "./components/Footer";
import { Placar } from "./components/PlacarContent";
import styles from "./App.module.css"

export function App() {
  return (
    <div>
      <Header />
      <Placar />
      <div className={styles.gols}>
        <div>
          <Gols time="Brasil" />
        </div>
        <div>
          <Gols time="Argentina" /> 
        </div>
      </div>
      <Footer />
    </div>
  );
}
