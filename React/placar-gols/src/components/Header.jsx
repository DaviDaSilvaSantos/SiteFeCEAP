import styles from "./Header.module.css"

export function Header(){
    return (
        <div className={styles.header}>
            <h1>Competição de Times</h1>
            <p>Marque gols e veja o resultado</p>
        </div>
    )
}