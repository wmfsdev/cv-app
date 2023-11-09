import { useState } from 'react'
import { cvData } from './components/data'
import { formStructure } from './components/data'

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


  function Form({data, setCv}) {
    return (
      <>
      <form onSubmit={handleClick}>
        <h1>CV</h1>
        <Fieldset legends={formStructure} data={data} setCv={setCv}/>
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
    // cv={cv} setCv={setCv}
    const listLabels = legend.labels.map((label, index) => {
    const inputKey = Object.keys(cv[pos])
    const inputValue = Object.values(cv[pos])
      return <label key={index}>{label}
        <Input inputKey={inputKey[index]} inputValues={inputValue[index]} onInput={handleInput}/>   
      </label>
    })
    return listLabels
  }
  
  function handleInput(e) {
    setCv(cv.map(obj => {
      if (Object.hasOwn(obj, e.target.id)) {
        return {...obj, [e.target.id]: e.target.value}
      } else return obj
    }))
  }

  function Input({inputKey, inputValues, onInput}) {
    // function handleChange(e) {
    //   const newState = data.map((obj, index) => {
    //     if (Object.hasOwn(obj, e.target.id)) { // if key of object matches id of element     
    //       return {...obj, [e.target.id]: e.target.value}
    //     }  return obj
    //   })
    //   console.log(newState)
    //   setCv(newState)
    // }
  function handleInput(e) {
    onInput(e)
  }

    return (
      <input
        key={inputKey}
        type={typeof inputValues}
        id={inputKey}
        name={inputKey}
        value={inputValues}
        onChange={handleInput}
      />
    )
  }

  function Fieldset({legends, data, setCv}) {
    const listCategories = legends.map((legend, index) => {
      return (
        <>
        <fieldset>
          <legend>{legend.category}</legend>
            <Label key={index} legend={legends[index]} pos={index} data={data} setCv={setCv}/> 
        </fieldset>
        </>
      )
    })
    return listCategories
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