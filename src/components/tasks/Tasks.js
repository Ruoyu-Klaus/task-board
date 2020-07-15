import React, { useEffect, useState } from 'react';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTasks = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();

    setTasks(data);
    setLoading(flase);
  };
  return <div></div>;
}

export default Tasks;
