import styles from './Tasks.module.css';

interface TasksProps {
  created: number;
  completed: number;  
}

export function Tasks({ created, completed }: TasksProps) {
  return (
    <div className={styles.infos}>
      <strong className={styles.created}>
        Tarefas criadas: 
        <span className={styles.createdNumber}>{created}</span>
      </strong>
      
      <div className={styles.done}>
        Concluídas:
        <span className={styles.completedNumber}>{completed}</span>  
        
      </div>
      
      <div className={styles.line}></div>
    </div>
  );
}


