import React, { Component } from 'react'
import FilterBar from '../FilterBar'
import ArticleListContainer from './ArticleListContainer'

export default class ContentContainer extends Component {
  constructor(props){
    super(props);

    this.state = {  currentQuery: "",  }
  }

  onQueryUpdate = (event) => {
    this.setState({ currentQuery: event.target.value })
  }

  render() {
    return (
      <div className="content-container">
        <FilterBar
          currentQuery={this.state.currentQuery}
          onFilterChange={this.onQueryUpdate}
        />
        <ArticleListContainer
          articles={this.props.articles}
          handleCardClick={this.props.handleCardClick}
          currentQuery={this.state.currentQuery}
        />
      </div>
    )
  }
}
