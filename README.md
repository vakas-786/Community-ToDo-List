<br />
<br />
<p align="center">
  <a >
    <img src="/list_demo.png" height= 40% width=70% >
  </a>
<p align="center">
  
  <h1 align="center">Community ToDo List</h1>

  <p align="center">
  A customizable task lister. The repo for the backend can be found <a href='https://github.com/vakas-786/ToDo-Backend'>here</a>
  <br>
  </br>
  <a href="https://community-to-do-react.herokuapp.com/">Live Demo</a>
  .
  <a>Demo</a>
  </p>
  
</p>




## Login 
Create an account or Login using these credentials 
  * Username: test
  * Password: password
  
<!-- ABOUT THE PROJECT -->
## User Stories

* As a User I can create an account, so that I can have my own personal list of tasks and categories.
* As a User I can delete my tasks  so I can clear all completed tasks. 
* As a User I can organize my tasks by category  so I can easily find the task I'm looking for. 
* As a User I can update my categories so that I can organize my tasks according to my current neeeds.  

## Technical Challenges 
When a user first signs in they'll find that they're presented with default categories to use for their task list (All, Code, Food, Money, and Misc). To ensure that each newly created user comes with these categories, I implemented a callback from the User controller to the User model. The class method within the User model then created the default categories for the new User. <br></br>
<b>User Controller</b>
```
def create
    @user = User.create(user_params)

    if @user.valid?
      User.giveCategory(@user)
      @token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end
  ```
  <b>User Model</b>
  ```sh
  def self.giveCategory(user)
        category_array = []

        category_array.push(Category.create(name: 'All', user_id: user.id))
        category_array.push(Category.create(name: 'Code', user_id: user.id))
        category_array.push(Category.create(name: 'Food', user_id: user.id))
        category_array.push(Category.create(name: 'Money', user_id: user.id))
        category_array.push(Category.create(name: 'Misc', user_id: user.id))

        user.categories = category_array
    end 
  ```
 
  
  

## Built With

* React.js
* Bootstrap
* Ruby on Rails 
* PostgreSQL
* ActiveRecord
* JWT Auth

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is app uses a rails backend. Clone the repository and follow the directions below to start the rails server. 
```sh
git clone https://github.com/vakas-786/ToDo-Backend.git
```
Then run the next set of commands in your terminal after you've cloned down the repo
```sh 
bundle install 
```
```sh
rails db:create
```
```sh
rails db:migrate
```
```sh
rails db:seed
```
```sh
rails s
```


### Installation

1. Clone the repo
```sh
git clone https://github.com/vakas-786/Community-ToDo-List.git
```
2. Install NPM packages
```sh
npm install 
```
3. Start the app 
```sh
npm start
```


