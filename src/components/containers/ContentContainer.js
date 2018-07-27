import React, { Component } from 'react'
import FilterBar from '../FilterBar'
import ArticleListContainer from './ArticleListContainer'

export default class ContentContainer extends Component {
  constructor(props){
    super(props);

    this.state = {  key: "value",  }
  }


  render() {
    console.log("state in conent container", this.state)
    return (
      <div className="content-container">
        <FilterBar />
        <ArticleListContainer 
          articles={this.props.articles}
          handleCardClick={this.props.handleCardClick}
        />
      </div>
    )
  }
}
