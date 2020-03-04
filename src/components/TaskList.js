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
    <div className="wrapper"> 
        <div className="active">
            <h1 className="active__title">Zadania do zrobienia</h1>
            {activeTasks.length > 0 ? activeTasks : <p className="active__done">Brawo, wykonaleś wszystkie zadania :)</p>}
        </div>
        <br/>
        <div className="done">
        <h2 className="done__title">Zadania zrobione ({done.length < 1 ? done.length : <span style={{color: "red"}}>{done.length}</span>})</h2>
            <p>
                {doneTasks}
            </p>
        </div>
    </div>
        </>
    )
}

export default TaskList