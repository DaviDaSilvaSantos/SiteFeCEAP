import styles from "./PlacarContent.module.css"

export function Placar({vencedor}){
    return(
        <div className={styles.placar}>
            <p>Vencedor Atual</p>
            <h1>{vencedor}</h1>
        </div>
    )
}