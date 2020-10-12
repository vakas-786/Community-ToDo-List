import React from 'react'


class Category extends React.Component {
    state = {
        categories: []
    }

    componentDidMount() {
        this.mounted = true 
        if (this.mounted === true) {
            this.fetchUser()
        }
    }

    fetchUser = () => {
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

    componentWillUnmount() {
        this.mounted = false 
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