import styles from './GolsContent.module.css';

export function Gols({time, urlImage, placar, onGol}){
 

    return(
        <div className={styles.goltime}>
            <h3>{time}</h3>
            <p>Placar: {placar}</p>
            <img src={urlImage} alt={time} width="200" height="200"/>
            <button onClick={onGol}><b>Marque gols</b></button>
        </div>
    )
}