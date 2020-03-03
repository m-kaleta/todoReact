import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    const activeTasks = active.map(task => <Task 
    key={task.id}
    task={task}
    delete={props.delete}
    change={props.change}
    />)

    const doneTasks = done.map(task => <Task 
    key={task.id}
    task={task}
    delete={props.delete}
    change={props.change}
    />)

    return (
        <>
        <div className="active">
            <h1>Zadania do zrobienia</h1>
            {activeTasks.length > 0 ? activeTasks : <p>Brawo wykonaleś wszystkie zadania :)</p>}
        </div>

        <br/>

        <div className="done">
            <h3>Zadania zrobione ({done.length})</h3>
            {doneTasks}
        </div>
        </>
    )
}

export default TaskList