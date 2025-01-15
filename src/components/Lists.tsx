import React from 'react';
import styles from './Lists.module.css';

import botao from '../assets/botao.svg'

interface Tarefa {
  text: string;
  completed: boolean
}

interface ListsProps {
  tasks: Tarefa[];
  setTasks: React.Dispatch<React.SetStateAction<Tarefa[]>>;
}

export function Lists({ tasks, setTasks }: ListsProps) {

  const handleDeleteTask = (taskToDelete: Tarefa): void => {
    setTasks(tasks.filter(task => task.text !== taskToDelete.text));
  };

  const handleCompleteTask = (taskToComplete: Tarefa): void => {
    setTasks(tasks.map(task => 
      task.text === taskToComplete.text
      ? { ...task, completed: !task.completed}
      : task
    ));
  }

  return (
    <div className={styles.listBox}>
      <div className={styles.listContent}>
        {tasks.map((task, index) => (
          <div key={index} className={styles.taskItem}>
            <header>
              <button
                title="Concluir tarefa"
                onClick={() => handleCompleteTask(task)}
                className={styles.completedButton}
              >
                <div className={task.completed ? styles.taskStatusCompleted : styles.taskStatusIncompleted}>

                </div>
              </button>

              <div 
                className={`${styles.selector} ${task.completed ? styles.completed : ''}`}>
                  {task.text}
              </div>
              
              <button
                title="Deletar tarefa"
                onClick={() => handleDeleteTask(task)}
                className={styles.deleteButton}
              >
                <img src={botao} alt="Deletar" className={styles.icon} />
              </button>
            </header>
          </div>
        ))}
      </div>
    </div>
  );
}