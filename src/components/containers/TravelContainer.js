import React, { Component } from 'react'
import Navbar from '../Navbar'
import ContentContainer from './ContentContainer'
import ArticleDetail from '../ArticleDetail'
import articles from "../../data"

export default class TravelContainer extends Component {

  handleCardClick = (event) => {
    console.log("Card was clicked!!!", event);
  } 

  render() {
    return (
      <div className="travel-container">
        TravelContainer content
        <Navbar />
        <ContentContainer 
          articles={articles} 
          handleCardClick={this.handleCardClick} 
        />
        <ArticleDetail />
      </div>
    )
  }
}
