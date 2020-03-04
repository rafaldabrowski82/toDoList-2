import React, {Component} from 'react';
import './App.css';

class App extends Component {
    minDate = new Date().toISOString().slice(0, 10);
    state = {
        date: this.minDate,
        task: '',
        priority: false,
        tasksToDo: [],
    };

    handleTask = (e) => {
        this.setState({
            task: e.target.value,
        })
    };

    handlePriority = (e) => {
        this.setState({
            priority: e.target.checked,
        })
    };

    handleDate = (e) => {
        this.setState({
            date: e.target.value,
        })
    };

    handleClick = () => {
        const lengthTaskListToDo = this.state.tasksToDo.length + 1;
        const newTask = [
            ...this.state.tasksToDo,
            {id: lengthTaskListToDo,
                task: this.state.task,
                date: this.state.date,
                priority: this.state.priority,
                active: false}
        ];
        this.setState({
            ...this.state,
            tasksToDo: newTask,
            task: '',
        })
    };

    render() {
        return (
            <div className="wrapper">
                <div className="header">
                    <h1>ToDo's - 2</h1>
                    <input type="text" placeholder="dodaj zadanie..." value={this.state.task}
                           onChange={this.handleTask}/><br/>
                    <input id="priority" type="checkbox" onChange={this.handlePriority} checked={this.state.priority}/>
                    <label htmlFor="priority" >Priorytet</label><br/>
                    <label htmlFor="finishDate">Do kiedy zrobić:</label>
                    <input id="finishDate" type="date" max="2020-12-31" min={this.state.date} value={this.state.date}
                           onChange={this.handleDate}/><br />
                    <button onClick={this.handleClick}>Dodaj</button>

                </div>
                <div className="main">
                    <p>main</p>
                </div>
                <div className="section">
                    <p>section</p>
                </div>
            </div>
        );
    }
}

export default App;
