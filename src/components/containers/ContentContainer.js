import React, { Component } from 'react'
import FilterBar from '../FilterBar'
import ArticleListContainer from './ArticleListContainer'

export default class ContentContainer extends Component {
  render() {
    // console.log("props in conent container", this.props)
    return (
      <div className="ContentContainer">
        ContentContainer Content 
        <FilterBar />
        <ArticleListContainer articles={this.props.articles}/>
      </div>
    )
  }
}
