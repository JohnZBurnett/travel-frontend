import React, { Component } from 'react'
import FilterBar from '../FilterBar'
import ArticleListContainer from './ArticleListContainer'

export default class ContentContainer extends Component {
  render() {
    return (
      <div className="ContentContainer">
        ContentContainer Content 
        <FilterBar />
        <ArticleListContainer />
      </div>
    )
  }
}
