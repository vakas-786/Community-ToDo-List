import React from 'react'

class TaskFormm extends React.Component {
    
    state = {
        task: '',
        categoryArray: [],
        category: '',
        user: []
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
        let token = localStorage.getItem("token")
        fetch('http://localhost:3000/api/v1/profile', {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(response => response.json())
        .then(data => {
            this.setState({user: data.user, categoryArray: data.user.categories.sort((a, b) => a.id - b.id)})
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        let inputTask = {
            text: this.state.task,
            category: this.state.category,
            user_id: this.state.user.id
        }
         this.props.addTask(inputTask)
    }

    changeHandler = (e, map) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    selectCategory = () => {
        let origArr = this.state.categoryArray.map((categoryObj) => categoryObj.name).slice(1,5)
        return origArr.map((category, index) => <option key={index} value={category}>{category}</option>).slice(0, 4)
    }
    render() {
        return(
            <form className="new-task-form" onSubmit={e => this.submitHandler(e)}>
                <input onChange={e => this.changeHandler(e)} name="task" value={this.state.task} placeholder="Enter a New Task" type="text" />
                <select  onChange={e => this.changeHandler(e)} name="category" defaultValue='first' >
                    <option value='first' disabled>Category</option>
                    {this.selectCategory()}
                    </select>
                    <input type="submit" />
            </form>
        )
    }
}

export default TaskFormm