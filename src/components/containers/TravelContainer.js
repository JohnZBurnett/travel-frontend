import React, { Component } from 'react'
import Navbar from '../Navbar'
import ContentContainer from './ContentContainer'
import ArticleDetail from '../ArticleDetail'
import articles from "../../data"
import userSavedArticles from '../../user_data'
import LoginForm from '../Forms'

export default class TravelContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onDetailPage: false,
      onUserShowPage: false,
      userSavedArticles: [],
      userLoggedIn: false,
      currentArticle: {},
      articles: articles,
      user: {
        username: "",
        password: ""
      }

    }
  }

  onFormChange = (event) => {
    console.log("We're in the onFormChange CB!", this.state.user)
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
/* fetch to db using state */
  registerSubmit = (event) => {
    debugger
    event.preventDefault()
    console.log("reg submit", event.target)
  }

  postUserToDatabase = () => {

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
    this.setState({ userSavedArticles: clonedSavedArticles })
  }

  handleUnsaveClick = (event) => {
    console.log("Unsave Click Event: ", event); 
    let currentIndex = this.state.userSavedArticles.indexOf(this.state.currentArticle); 
    let userSavedArticlesClone = [...this.state.userSavedArticles]; 
    userSavedArticlesClone.splice(currentIndex, 1); 
    console.log("Post-Splice Saved Articles: ", userSavedArticlesClone); 
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
    // console.log("current state in travel container: ", this.state)
    // console.log("saved articles after push", this.state.userSavedArticles)
    return (
      <div className="travel-container">
        TravelContainer content
        <Navbar onNavbarClick={this.onNavbarClick} userLoggedIn={this.state.userLoggedIn} handleUserShowClick={this.handleUserShowClick}/>
        {this.handleDisplayingContent()}
      </div>
    )
  }
}
