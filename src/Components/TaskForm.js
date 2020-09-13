import React from 'react'

class TaskFormm extends React.Component {
    
    state = {
        
        task: '',
        categoryArray: [],
        category: 'All'
    }


    componentDidMount() {
        this.mounted = true 
        if (this.mounted === true) {
            this.fetchCategories()
        }
    }


    componentWillUnmount() {
        this.mounted = false 
    }

    fetchCategories = () => {
        fetch('http://localhost:3000/categories')
        .then(response => response.json())
        .then(categoryArr => this.setState({categoryArray: categoryArr}))
    }

    submitHandler = (e) => {
        e.preventDefault()
        let inputTask = {
            text: this.state.task,
            category: this.state.category
        }
         this.props.addTask(inputTask)
    }

    changeHandler = (e, map) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    selectCategory = () => {
        let origArr = this.state.categoryArray.map((categoryObj) => categoryObj.name)
        return origArr.map((category, index) => <option key={index} value={category}>{category}</option>).slice(0, 4)
    }
    render() {
        return(
            <form className="new-task-form" onSubmit={e => this.submitHandler(e)}>
                <input onChange={e => this.changeHandler(e)} name="task" value={this.state.task} placeholder="Enter a New Task" type="text" />
                <select  onChange={e => this.changeHandler(e)} name="category" value={this.state.category}>
                    {this.selectCategory()}
                    </select>
                    <input type="submit" />
            </form>
        )
    }
}

export default TaskFormm