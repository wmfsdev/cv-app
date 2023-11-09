import { useState } from 'react'
import { cvData } from './components/data'
import { formStructure } from './components/data'
import Input from './components/input'

import './App.css'

function App() {
const [cv, setCv] = useState(cvData)

  function handleClick(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(data.get("name"))
    console.log(data.get("email"))
    console.log(data.get("what"))
  }

  function handleInput(e) {
    setCv(cv.map(obj => {
      if (Object.hasOwn(obj, e.target.id)) {
        return {...obj, [e.target.id]: e.target.value}
      } else return obj
    }))
  }

  function Form() {
    return (
      <>
      <form onSubmit={handleClick}>
        <h1>CV</h1>
        <Fieldset legends={formStructure}/>
        <Button title="SEND" type="submit"/>
        <Button title="EDIT" type="button" />
      </form>
      </>
    )
  }

  function Fieldset({legends}) {
    const listCategories = legends.map((legend, index) => {
      return (
        <>
        <fieldset>
          <legend>{legend.category}</legend>
            <Label legend={legends[index]} pos={index}/> 
        </fieldset>
        </>
      )
    })
    return listCategories
  }

  function Label({legend, pos}) {
    
    const listLabels = legend.labels.map((label, index) => {
    const inputKey = Object.keys(cv[pos])
    const inputValue = Object.values(cv[pos])
      return <label key={index}>{label}
        <Input inputKey={inputKey[index]} inputValues={inputValue[index]} onInput={handleInput}/>   
      </label>
    })
    return listLabels
  }
  
  function Button({title, type}) {
    return (
      <button id={title} type={type}>{title}</button>
    )
  }

  function DisplayCV({cv}) {
    return (
      <h1>{cv[0].name}</h1>
    )
  }

  return (
    <>
    <Form/>  
    <DisplayCV cv={cv}/>
    </>
  )
}

export default App