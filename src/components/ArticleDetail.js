import React from 'react'

const ArticleDetail = (props) => {
  return (
    <div className="article-detail">
      <img src={props.article.picture_url} alt="main picture"></img>
      <h1>{props.article.title}</h1>
      <p>{props.article.body_text}</p>
    </div>
  )
}

export default ArticleDetail
