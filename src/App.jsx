import { useState } from 'react'
import { cvData } from './components/data'
import { formStructure } from './components/data'

import './App.css'

function App() {

  function handleClick(e) {
    e.preventDefault()
    //console.log(e.target.id)
    const data = new FormData(e.target)
    // console.log(e.target.value)
    console.log(data.get("name"))
    // console.log(data.get("email"))
    // console.log(data.get("what"))
  }


  function Form() {
    return (
      <>
      <form onSubmit={handleClick}>
        <h1>CV</h1>
        <Fieldset legends={formStructure} />
        <Button title="SEND" type="submit"/>
        <Button title="EDIT" type="button" />
      </form>
      </>
    )
  }

  function Button({title, type}) {
    return (
      <button id={title} type={type}>{title}</button>
    )
  }

  function Label({legend, pos}) { 
    const [data, setData] = useState(cvData)
    const listLabels = legend.labels.map((label, index) => {
    const inputKey = Object.keys(data[pos])
    const inputValue = Object.values(data[pos])
      return <label key={index}>{label}
        <Input inputKey={inputKey[index]} inputValues={inputValue[index]} data={data} setData={setData}/>   
      </label>
    })
    return listLabels
  }

  function Input({inputKey, inputValues, data, setData}) { 

  function handleChange(e) {
    const newState = data.map(obj => {
      return {...obj, [e.target.id]: e.target.value}
    })
    setData(newState)
  }
    return (
      <input
        key={inputKey}
        type={typeof inputValues}
        id={inputKey}
        name={inputKey}
        value={inputValues}
        onChange={handleChange}
      />
    )
  }

  function Fieldset({legends}) {
    const listCategories = legends.map((legend, index) => {
      return (
        <>
        <fieldset>
          <legend>{legend.category}</legend>
            <Label key={index} legend={legends[index]} pos={index}/> 
        </fieldset>
        </>
      )
    })
    return listCategories
  }

  return (
    <Form></Form>
  )
}

export default App