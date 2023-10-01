import { useEffect, useState } from "react"
import Form from "./form";
import Articles from "./Articles";

function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem('articles')) || [] 
}

function App() {
const [articles, setArticles] = useState(getDataFromLocalStorage())

const addArticle = (article) => {

setArticles((prev) => {
  return [...prev, article]
});
  


};

useEffect(() => {
  localStorage.setItem('articles', JSON.stringify(articles))
},[articles])


  return (
    <div className="main-form">
      <h2 className="form-title">Add New Article</h2>
      <Form addArticle={addArticle}/>
      <Articles articles={articles}/>
      
    </div>
  )
}

export default App;