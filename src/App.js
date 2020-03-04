import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";

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
            {
                id: lengthTaskListToDo,
                task: this.state.task,
                date: this.state.date,
                priority: this.state.priority,
                active: true,
            }
        ];

        if(this.state.task.trim().length === 0) {
            this.setState({
                ...this.state,
                task: '',
                priority: false,
                date: this.minDate,
            })
        }
        else
        {
            this.setState({
                ...this.state,
                tasksToDo: newTask,
                task: '',
                priority: false,
                date: this.minDate,
            })
        }
    };

    handleDelete = (id) => {
        const tasksToDo = this.state.tasksToDo.filter(item => item.id !== id);

        this.setState({
            ...this.state,
            tasksToDo,
        })
    };

    handleFinished = (id) => {
        const tasksToDo = this.state.tasksToDo.map(item => {
            if(item.id === id) {
                item.active = false;
                return item;
            }
            else
            {
                return item;
            }
        } );

        this.setState({
            ...this.state,
            tasksToDo,
        })
    };

    render() {
        return (
            <div className="wrapper">
                <Header state={this.state} click={this.handleClick} handleDate={this.handleDate}
                        priority={this.handlePriority} task={this.handleTask}/>

                <Main listOfTasks={this.state.tasksToDo} click={this.handleDelete} clickFinished={this.handleFinished}/>

                <div className="section">
                    <p>section</p>
                </div>
            </div>
        );
    }
}

export default App;
