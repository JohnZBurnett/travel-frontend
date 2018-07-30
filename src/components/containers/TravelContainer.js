import React, { Component } from 'react'
import Navbar from '../Navbar'
import ContentContainer from './ContentContainer'
import ArticleDetail from '../ArticleDetail'
import articles from "../../data"
import userSavedArticles from '../../user_data'

export default class TravelContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onDetailPage: false,
      onUserShowPage: false,
      userSavedArticles: [],
      userLoggedIn: true,
      currentArticle: {},
      articles: articles,

    }
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

  render() {
    // console.log("current state in travel container: ", this.state)
    // console.log("saved articles after push", this.state.userSavedArticles)

    return (
      <div className="travel-container">
        TravelContainer content
        <Navbar onNavbarClick={this.onNavbarClick} userLoggedIn={this.state.userLoggedIn} handleUserShowClick={this.handleUserShowClick}/>
        {this.toggleDetailPage()}
      </div>
    )
  }
}
