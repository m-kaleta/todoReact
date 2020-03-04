import React from 'react';
import "../sass/_task.scss"

const Task = (props) => {

    const style = {
        color: "red"
    }

    const { text, date, id, active, important, finishDate} = props.task

    if(active) {
    return (
        <div>
            <p className="task">
                <strong style={important ? style : null }>{text}</strong>
                <br/>
                - wykonać do <span className="task__date">{date}! </span> 
                <br/>
                <button className="task__button" onClick={() => props.change(id)}>Zostało wykonane</button>
                <button className="task__button" onClick={() => props.delete(id)}>X</button>
            </p>
        </div>
    );} else {
        const finish = new Date(finishDate).toLocaleString()
        return(
        <div>
            <p>
                <strong className="taskText">{text}</strong> <em>(zrobić do {date}) </em>
                <br/>
                - potwierdzenie wykonania {finish}
                <br/>
                <button className="task__button" onClick={() => props.delete(id)}>X</button>
            </p>
        </div>
    )}
}

export default Task