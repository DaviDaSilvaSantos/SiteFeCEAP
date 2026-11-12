import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.titulo}>Vitrine das Disciplinas Técnicas</h1>
      <p className={styles.descricao}>
        Cards explicativos sobre cada disciplina técnica do quarto semestre do
        curso de TI (4SIT)
      </p>
    </header>
  );
}
