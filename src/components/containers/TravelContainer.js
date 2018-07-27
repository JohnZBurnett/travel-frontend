import React, { Component } from 'react'
import Navbar from '../Navbar'
import ContentContainer from './ContentContainer'
import ArticleDetail from '../ArticleDetail'
import articles from "../../data"

export default class TravelContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onDetailPage: false,
    }
  }

  handleCardClick = (event, id) => {
    this.setState({
      onDetailPage: !this.state.onDetailPage,
    })
  } 

  render() {
    console.log("current state in travel container: ", this.state)
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
