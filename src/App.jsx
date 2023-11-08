import { useState } from 'react'
import { cvData } from './components/data'
import { formStructure } from './components/data'

import './App.css'

function App() {
 // const [cv, setCv] = useState(cvData)

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

  function Label({key, legend, pos}) { // , data, setCv
    const [cv, setCv] = useState(cvData)

    const listLabels = legend.labels.map((label, index) => {
    const inputKey = Object.keys(cv[pos])
    const inputValue = Object.values(cv[pos])
      return <label key={index}>{label}
        <Input inputKey={inputKey[index]} inputValues={inputValue[index]} data={cv} setCv={setCv}/>   
      </label>
    })
    return listLabels
  }
  

  function Input({inputKey, inputValues, data, setCv}) {
   
    function handleChange(e) {
      const newState = data.map(obj => {
        if (Object.hasOwn(obj, e.target.id)) { // if key of object matches id of element
          console.log(Object.hasOwn(obj, e.target.id), e.target.id)
          return {...obj, [e.target.id]: e.target.value}
        } else return obj
      })
      setCv(newState)
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

  // function DisplayCV({data, setCv}) {
  //  // const [data, setData] = useState(cvData)
  //   console.log(data)
  //   return (
  //     <h1>{data[0].name}</h1>
  //   )
  // }
// data={cv} setCv={setCv} 

  return (
    <>
    <Form />  
    {/* <DisplayCV data={cv} setCv={setCv}/> */}
    </>
  )
}

export default App