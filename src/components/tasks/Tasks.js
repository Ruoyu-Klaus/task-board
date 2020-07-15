import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import Preloader from '../layout/Preloader';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  const getTasks = async () => {
    setLoading(true);
    const res = await fetch('/tasks');
    const data = await res.json();
    setTasks(data);
    setLoading(false);
  };
  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header z-depth-2'>
      <li className='collection-header'>
        <h4 className='center'>Task Board</h4>
      </li>
      {!loading && tasks.length === 0 ? (
        <p className='center'>Looks good! No tasks so far.</p>
      ) : (
        tasks.map(task => <TaskItem task={task} key={task.id} />)
      )}
    </ul>
  );
}

export default Tasks;
