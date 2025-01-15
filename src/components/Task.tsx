import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './Task.module.css';
import { Lists } from './Lists';
import { Tasks } from './Tasks';
import { Content } from './Content';

interface Tarefa {
  text: string;
  completed: boolean;
}

export function Task() {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<Tarefa[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setNewTask(event.target.value);
  };

  const handleAddTask = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

 
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <>
      <form className={styles.task} onSubmit={handleAddTask}>
        <textarea
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className={styles.button} type="submit">
          Criar +
        </button>
      </form>

      {}
      <Tasks created={tasks.length} completed={completedTasks} />

      <Content tasks={tasks} />

      <div className={styles.listContent}>
        <Lists tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}


