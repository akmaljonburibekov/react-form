
function Articles({articles}) {
  // deleteItem((prev) => {
  //   return prev.filter((event) => {
  // //     return event.id !== id 
  //   })
  // })

  return (
    <ul className="form-ul">
      {articles.map((article) => {
        return(
          <li key={article.id} className="list">
            <h3>{article.title}</h3>
            <p>{article.autor}</p>
            <p>{article.date}</p>
            <button onClick={() => deleteItem(prev)}>Delete</button>
          </li>
        )
      })}
    </ul>
  )
}

export default Articles