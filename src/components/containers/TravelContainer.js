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

  onNavbarClick = (event) => {
    console.log("We're on the click!")
    if (event.target.id === "articles-button") {
      this.setState({
        onDetailPage: false
      })
    }
  }

  handleSaveClick = (event) => {
    console.log("handle save click", event.target)
    let clonedSavedArticles = [...this.state.userSavedArticles];
    clonedSavedArticles.push(this.state.currentArticle);
    this.setState({ userSavedArticles: clonedSavedArticles })
  }

  toggleDetailPage = () => {
    if (this.state.onDetailPage){

        return ( <ArticleDetail
            article={articles[0]}
            loggedIn={this.state.userLoggedIn}
            onArticleSave={this.handleSaveClick}
          />)

    }
    if (this.state.onUserShowPage) {

    } else {
        return (<ContentContainer
          articles={articles}
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
