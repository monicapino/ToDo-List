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
      
      <strong className={styles.done}>
        Concluídas:
        {}
        {created > 0 ? ( 
          <span className={styles.completedNumber}>
            {completed} de {created}
          </span>  
        ) : ( 
          <span className={styles.completedNumber}>0</span> 
        )}
      </strong>
      
      <div className={styles.line}></div>
    </div>
  );
}


