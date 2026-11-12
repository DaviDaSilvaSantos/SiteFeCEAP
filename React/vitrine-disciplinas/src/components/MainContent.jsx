import { DisciplineCard } from "./DisciplineCard";
import styles from "./MainContent.module.css";

export function MainContent() {
  return (
    <main className={styles.main}>
      <div className={styles.grade}>
        <DisciplineCard
          nome="Programação"
          professor="Fábio Santos"
          descricao="Ensina a aprender a programar em Java e também para dispositivos móveis."
          conteudos="Lógica de programação, Java e desenvolvimento mobile"
        />
        <DisciplineCard
          nome="Desenvolvimento Web"
          professor="Alef Jesus"
          descricao="Estuda a criação de sites, da estrutura das páginas até a publicação."
          conteudos="HTML, CSS, JavaScript e React"
        />
        <DisciplineCard
          nome="Ética"
          professor="Alef Jesus"
          descricao="Trata da ética e da moral no dia a dia, dentro e fora do trabalho."
          conteudos="Valores, moral, convivência e responsabilidade profissional"
        />                
        <DisciplineCard
          nome="Religião"
          professor="Harrison Parizotto"
          descricao="Explica a religião católica e a influência dela na vida cotidiana."
          conteudos="Doutrina católica, oração, fé e vida em sociedade"
        />
        <DisciplineCard
          nome="Empreendedorismo"
          professor="Paulo Henrique (PH)"
          descricao="Mostra como administrar a própria empresa e como empreender."
          conteudos="Plano de negócios, gestão, finanças e inovação"
        />
        <DisciplineCard
          nome="Projetos"
          professor="Hugo Santos"
          descricao="Acompanha o desenvolvimento do projeto para a FeCEAP."
          conteudos="Planejamento, trabalho em equipe, desenvolvimento e entrega do projeto"
        />
        <DisciplineCard
          nome="Inteligência Artificial"
          professor="Danilo Feitoza"
          descricao="Explica como a IA funciona e como ela aprende."
          conteudos="Conceitos de IA, aprendizado de máquina e uso responsável"          
        />
        <DisciplineCard
          nome="Desenvolvimento de Software"
          professor="Vinicius Matos"
          descricao="Ensina como desenvolver software e as regras do mercado de trabalho."
          conteudos="Ciclo de desenvolvimento, boas práticas, metodologias e mercado"
        />
        <DisciplineCard
          nome="Segurança da Informação"
          professor="Fernando Nit"
          descricao="Mostra como proteger o software e identificar possíveis falhas."
          conteudos="Vulnerabilidades, proteção de dados, boas práticas de segurança"          
        />
        <DisciplineCard
          nome="Educação Física"
          professor="Marcelo"
          descricao="Trabalha a interação com os colegas, o trabalho em equipe e a competitividade de forma dinâmica."
          conteudos="Atividades em grupo, jogos, cooperação e competição saudável"          
        />
      </div>
    </main>
  );
}
