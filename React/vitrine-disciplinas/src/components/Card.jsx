import styles from "./Card.module.css";

export function Card({tituloDisciplina, descricaoDisciplina}){
    return (
        <div className={styles.card}>
            {tituloDisciplina}
            {descricaoDisciplina}
        </div>
    );
}