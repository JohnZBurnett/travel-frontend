import React, { Component } from 'react'
import Navbar from '../Navbar'
import ContentContainer from './ContentContainer'
import ArticleDetail from '../ArticleDetail'
/* import articles from "../../data" */
import userSavedArticles from '../../user_data'
import LoginForm from '../Forms'

export default class TravelContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersArray: [],
      onDetailPage: false,
      onUserShowPage: false,
      userSavedArticles: [],
      userLoggedIn: false,
      currentArticle: {},
      articles: [],
      user: {
        username: "",
        password: ""
      },
      currentUserId: null,

    }
  }

  callToDb = () => {
    fetch(`http://localhost:3000/api/v1/articles`).then( r => r.json()).then( data => this.setState({
      articles: data
    }))
  }
    postUserToDb = () => {
      fetch(`http://localhost:3000/api/v1/users`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.user.username,
          password: this.state.user.password
        })
      }).then( resp => resp.json() ).then( userJSON => {
        this.addUserIdToState(userJSON);
        return this.setupUsersArray(); 
      })
    }

    addUserIdToState = (userJSON) => {
      console.log("User JSON: ", userJSON);
      this.setState({
        currentUserId: userJSON.id,
      })
    }
    setupUsersArray = () => {
      fetch(`http://localhost:3000/api/v1/users`).then(r => r.json()).then(data => this.setState({
        usersArray: data
      }))
    }

  componentDidMount(){
    this.callToDb();
  }

  onFormChange = (event) => {
    let formKey = event.target.id
    if (formKey === 'username'){
      this.setState({
        user: {
          username: event.target.value,
          password: this.state.user.password
        }
      })
    } else if (formKey === 'password') {
      this.setState({
        user: {
          username: this.state.user.username,
          password: event.target.value
        }
      })
    }
  }


  setupState = () => {
    let currentUser = this.state.usersArray.find( user => { user.username === this.state.user.username})
    console.log(this.state.usersArray)
  }

  

/* fetch to db using state */
  registerSubmit = (event) => {
    event.preventDefault()
    this.postUserToDb()
 
    this.setupState()
    this.setState({
      userLoggedIn: !this.state.userLoggedIn,

    })
    
  }

  loginSubmit = (event) => {
    event.preventDefault()
    console.log("login submit", event.target)
  }



  handleUserShowClick = (event) => {
    this.setState({
      onUserShowPage: true 
    })
    console.log("On User Show Page: ", this.state.onUserShowPage); 
  }

  handleCardClick = (event, article) => {
    this.setState({
      currentArticle: article
    })
  
    this.setState({
      onDetailPage: !this.state.onDetailPage,
    })
  }

  onNavbarClick = (event, buttonClicked) => {

    switch (buttonClicked) {
      case "articles": 
        this.setState({
          onDetailPage: false,
          onUserShowPage: false,
        });
        break;
      case "userPage": 
        this.setState({
          onDetailPage: false,
          onUserShowPage: true, 
        })
        break; 
    }
  }

  handleSaveClick = (event) => {
    console.log("handle save click", event.target)
    let clonedSavedArticles = [...this.state.userSavedArticles];
    clonedSavedArticles.push(this.state.currentArticle);
    this.patchUserWithSavedArticle(); 
    this.setState({ userSavedArticles: clonedSavedArticles })
    
  }

  handleUnsaveClick = (event) => {
    console.log("Unsave Click Event: ", event); 
    let currentIndex = this.state.userSavedArticles.indexOf(this.state.currentArticle); 
    let userSavedArticlesClone = [...this.state.userSavedArticles]; 
    userSavedArticlesClone.splice(currentIndex, 1); 
    console.log("Post-Splice Saved Articles: ", userSavedArticlesClone); 
  }

  patchUserWithSavedArticle = () => {
    let userToPatch = this.state.usersArray.find( user => user.id === this.state.currentUserId); 
    userToPatch.articles.push(this.state.currentArticle); 
    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type":"application/JSON"
      },
      body: JSON.stringify(userToPatch), 
    }

    fetch(`http://localhost:3000/api/v1/users/${this.state.currentUserId}`, configObj).then(r => console.log("UPDATE RESPONSE ", r))
  }

  toggleDetailPage = () => {
    if (this.state.onDetailPage){

        return ( <ArticleDetail
            article={this.state.currentArticle}
            loggedIn={this.state.userLoggedIn}
            onArticleSave={this.handleSaveClick}
            userSavedArticles={this.state.userSavedArticles}
            onArticleUnsave={this.handleUnsaveClick}
          />)

    }
    if (this.state.onUserShowPage) {
      return (<ContentContainer
        articles={this.state.userSavedArticles}
        handleCardClick={this.handleCardClick}
      />  )
    } else {
        return (<ContentContainer
          articles={this.state.articles}
          handleCardClick={this.handleCardClick}
        />  )
    }
  }

  renderLoginPage = () => {
    return <LoginForm registerSubmit={this.registerSubmit} onFormChange={this.onFormChange} username={this.state.user.username} password={this.state.user.password}/>
  }

  handleDisplayingContent = () => {
    console.log("inHandle", this.state)
    if (this.state.userLoggedIn === false) {
      return this.renderLoginPage(); 
    } else {
      return this.toggleDetailPage(); 
    }
  }

  render() {
    return (
      <div className="travel-container">
        TravelContainer content
        <Navbar onNavbarClick={this.onNavbarClick} userLoggedIn={this.state.userLoggedIn} handleUserShowClick={this.handleUserShowClick}/>
        {this.handleDisplayingContent()}
      </div>
    )
  }
}
