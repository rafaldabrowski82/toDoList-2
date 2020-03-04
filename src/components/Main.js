import React from 'react';
import '../styles/Main.css';

const Main = (props) => {
    // let tasks = props.listOfTasks.filter(item => item.active === true);

    const tasks = props.listOfTasks.map(item => (
        <li key={item.id}
            className={item.priority ? "priority" : null}>
            {item.task} <span>=> do{item.date}</span>
            <button onClick={() => props.clickFinished(item.id)}>Zadanie zakończone</button>
            <button onClick={() => props.click(item.id)}>X</button>
        </li>
        )
    );

    return(
        <div className="main">
            <>
                <h2>Zadania do zrobienia:</h2>
                {tasks.length > 0 ? <ul>{tasks}</ul> : <p>Brak zadań!</p>}
            </>
        </div>
    );
};

export default Main;