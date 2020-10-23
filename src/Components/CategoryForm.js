import React from 'react'
import { Form, FormGroup, Input, Button, Label  } from 'reactstrap'

 
class CategoryForm extends React.Component {

    state = {
        categories: [],
        id: '',
        name: '',
        user: [],
        task: []
    }

    changeHandler = (e) => {
        this.setState({ name: e.target.value})
    }

    editCategory = (obj) => { 
        let id = (obj.id) 
        let name = obj.name
        let user = obj.user
        this.setState({
            id: id,
             name: name,
             user: user
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
        let token = localStorage.getItem("token")
        fetch('http://localhost:3000/api/v1/profile', {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(response => response.json())
        .then(data => {
            this.setState({categories: data.user.categories.sort((a, b) => a.id - b.id)})
        })
    }



    componentDidMount() {
        this.fetchCategories()
    }

    categoryMap = () => {
        return this.state.categories.map((category) => <span className='category-span' key={category.id} value={category.name} onClick={()=> this.editCategory(category)} name="category">{category.name}</span> ).slice(1,5)
    }

    render() {
       
    return( 
        <>

        <br></br>
        <br></br>
        <br></br>
      
    <div className='text-center'>
        {this.categoryMap()}
    </div>

    <br></br>
    <Form className='category-form' onSubmit={this.submitHandler}>
        <FormGroup>
        <Input value={this.state.name} onChange = {(this.changeHandler)} placeholder="Selected Category" name="category" /> 
        <div className='text-center'>
        <Label style={{color: 'rgb(2, 16, 139)'}}>Click on a Category to Begin Editing</Label>
        </div>
        </FormGroup>
        <div className='text-center'>
            <br></br>
        <Button  type="submit">Submit Changes</Button>
        </div>
    </Form>
        </>

    )
  }
}
 
export default CategoryForm