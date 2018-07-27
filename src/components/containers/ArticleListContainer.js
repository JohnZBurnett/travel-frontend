import React, { Component } from 'react'
import ArticleCard from '../ArticleCard'

export default class ArticleListContainer extends Component {
  render() {
    return (
      <div className="ArticleListContainer">
        ArticleListContainer content 
        <ArticleCard />
      </div>
    )
  }
}
