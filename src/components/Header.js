import React from 'react';
import '../styles/Header.css';

const Header = (props) => {
    const { date, task, priority } = props.state;
    return (
        <div className="header">
            <h1>ToDo's - 2</h1>
            <input type="text" placeholder="dodaj zadanie..." value={task}
                   onChange={props.task}/><br/>
            <input id="priority" type="checkbox" onChange={props.priority} checked={priority}/>
            <label htmlFor="priority"> Priorytet</label><br/>
            <label htmlFor="finishDate">Do kiedy zrobić: </label>
            <input id="finishDate" type="date" max="2020-12-31" min={date} value={date}
                   onChange={props.handleDate}/><br/>
            <button onClick={props.click}>Dodaj</button>
        </div>
    )
};

export default Header;