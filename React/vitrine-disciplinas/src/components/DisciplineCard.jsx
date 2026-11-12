import styles from "./DisciplineCard.module.css";

export function DisciplineCard({ nome, descricao, conteudos, professor }) {
  return (
    <article className={styles.card}>
      <h2 className={styles.nome}>{nome}</h2>
      <p className={styles.professor}>
        Professor: <strong>{professor}</strong>
      </p>
      <p className={styles.descricao}>{descricao}</p>

      <div className={styles.bloco}>
        <h3 className={styles.rotulo}>Conteúdos</h3>
        <p className={styles.conteudos}>{conteudos}</p>
      </div>

      
    </article>
  );
}
