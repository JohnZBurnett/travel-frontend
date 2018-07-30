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

  onNavbarClick = (event) => {
    console.log("We're on the click!")
    if (event.target.id === "articles-button") {
      this.setState({
        onDetailPage: false
      })
    }
  }

  toggleDetailPage = () => {
    if (this.state.onDetailPage){

        return ( <ArticleDetail
            article={articles[0]}
          />)

    }

      return (<ContentContainer
              articles={articles}
              handleCardClick={this.handleCardClick}
            />  )


  }

  render() {
    // console.log("current state in travel container: ", this.state)
    return (
      <div className="travel-container">
        TravelContainer content
        <Navbar onNavbarClick={this.onNavbarClick}/>
        {this.toggleDetailPage()}
      </div>
    )
  }
}
