import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import styles from "./App.module.css";

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
