import React from 'react'

const ArticleDetail = (props) => {

  function renderIfLoggedIn() {
    console.log("article detail props", props)
    if (props.loggedIn) {
      if (props.userSavedArticles.includes(props.article)) {
        return <button onClick={props.onArticleUnsave}>Unsave Article</button>
      }
      return <button onClick={props.onArticleSave}>Save Article</button>
    }
  }

  return (
    <div className="article-detail">
      <img src={props.article.picture_url} alt="main picture"></img>
      <h1>{props.article.title}</h1>
      <p>{props.article.body_text}</p>
      {renderIfLoggedIn()}
    </div>
  )
}

export default ArticleDetail
