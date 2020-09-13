import React from 'react'
 
class CategoryForm extends React.Component {

    state = {
        categories: [],
        id: '',
        name: '',
        task: []
    }

    changeHandler = (e) => {
        this.setState({ name: e.target.value})
    }

    editCategory = (obj) => { 
        let id = (obj.id) 
        let name = obj.name
        this.setState({
            id: id,
             name: name
            })
    }

    submitHandler = (e) => {
        e.preventDefault()
        let id = this.state.id
        let name = this.state.name
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({name: name})
        }
        fetch(`http://localhost:3000/categories/${id}`, options)
        .then(()=> this.fetchCategories())
    }

    fetchCategories = () => {
        fetch('http://localhost:3000/categories')
        .then(response => response.json())
        .then(categories => this.setState({ categories: categories}))
    }


    componentDidMount() {
        this.fetchCategories()
    }

    categoryMap = () => {
        return this.state.categories.map((category) => <span key={category.id} value={category.name} onClick={()=> this.editCategory(category)} name="category">{category.name}</span> ).slice(1,5)
    }

    render() {
       
    return( 
        <React.Fragment>
      <form onSubmit={this.submitHandler}>
        <input value={this.state.name} onChange = {(this.changeHandler)} placeholder="Select a Category to Edit" name="category" /> 
        <input type="submit"/>
    </form>
    <div>
        {this.categoryMap()}

    </div>
        </React.Fragment>

    )
  }
}
 
export default CategoryForm