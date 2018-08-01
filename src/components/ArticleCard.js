import React from 'react'

const ArticleCard = (props) => {
  // console.log("article card props", props)
  return (
    <div className="article-card" onClick={(event) => props.handleCardClick(event, props.article)} >
      <img src={props.article.picture_url} alt="thumbnail here"></img>
      <h1>{props.title}</h1>
    </div>
  )
}

export default ArticleCard
