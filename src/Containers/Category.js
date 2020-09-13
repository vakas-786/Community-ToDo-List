import React from 'react'


class Category extends React.Component {
    state = {
        categories: []
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
        .then(categories => this.setState({ categories: categories}))
    }

    render() {
       let renderCategory = this.state.categories.map((categoryObj, index) => <button className={this.props.selectedState === categoryObj.name ? "selected" : null} onClick={(e)=> this.props.selectedCategory(e)}  key={index}> {categoryObj.name} </button>)
        return(
            <div className="categories" >
          <h5>Category Filters</h5>  
            {renderCategory}
        </div>

        )
    }
}

export default Category