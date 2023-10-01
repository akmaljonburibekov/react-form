import { useState } from "react"
import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

function Form({addArticle}) {
  const [title, setTitle] = useState('')
  const [autor, setAutor] = useState('')
  const [date, setDate] = useState('')

  const formEl = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    addArticle({
      id: uuidv4(),
      title,
      autor,
      date,
    });
    setTitle('')
    setAutor('')
    setDate('')
  };

  return (
      <form className="form-content" onSubmit={handleSubmit} ref={formEl}>
        <div className="form-control"> 
        <label htmlFor="title">Title</label>
        <input onChange={(e) => setTitle(e.currentTarget.value)} type="text" id="title" placeholder="Article title" value={title}/>
        </div>
        <div className="form-control"> 
        <label htmlFor="autor">Autor</label>
        <input onChange={(e) => setAutor(e.target.value)} type="text" id="autor" placeholder="Article autor" value={autor}/>
        </div>
        <div className="form-control"> 
        <label htmlFor="date">Date</label>
        <input onChange={(e) => setDate(e.target.value)} type="date" id="date" value={date}/>
        </div>
        <button className="form-button">Submit</button>
      </form>
  )
}

export default Form;