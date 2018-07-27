import React, { Component } from 'react'
import ArticleCard from '../ArticleCard'

export default class ArticleListContainer extends Component {
  render() {
    // console.log("props in article list container", this.props)
    return (
      <div className="ArticleListContainer">
        ArticleListContainer content 
        <ArticleCard articles={this.props.articles}/>
      </div>
    )
  }
}
