import React, { Component } from 'react'
import Navbar from '../Navbar'
import ContentContainer from './ContentContainer'
import ArticleDetail from '../ArticleDetail'

export default class TravelContainer extends Component {
  render() {
    return (
      <div className="travel-container">
        TravelContainer content
        <NavBar />
        <ContentContainer />
        <ArticleDetailContainer />
      </div>
    )
  }
}
