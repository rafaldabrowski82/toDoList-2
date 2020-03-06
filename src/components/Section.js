import React from 'react';
import '../styles/Section.css';

const Section = (props) => {
    const numberOfFinishedTasks = props.finishedTasks.length;
    const finishedTasks = props.finishedTasks.map(item => <li><strong>{item.task}</strong> - (do {item.date}) <button onClick={() => props.click(item.id)}>Usuń zadanie</button></li>);
    return(
        <div className="section">
            <h2>Zakończone zadania ({numberOfFinishedTasks})</h2>
            <ul>
                {finishedTasks}
            </ul>
        </div>
    );
};

export default Section;