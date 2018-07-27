import React from 'react'

const ArticleDetail = (props) => {
  return (
    <div className="article-detail">
      {props.article.picture_url}
      {props.article.title}
      {props.article.body_text}
    </div>
  )
}

export default ArticleDetail
