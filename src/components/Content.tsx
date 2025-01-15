import styles from './Content.module.css';
import Clipboard from '../assets/Clipboard.svg'


interface Tarefa {
  text: string;
  completed: boolean;
}

interface ContentProps {
  tasks: Tarefa[]; 
}

export function Content({ tasks }: ContentProps) {
 
  if (tasks.length === 0) {
    return (
      <div className={styles.content}> 
         <img className={styles.img} src={Clipboard} alt="Clipboard" /> 
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    )
  }

}


