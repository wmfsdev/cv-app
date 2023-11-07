import { useState } from 'react'
import { cvData } from './components/data'

import './App.css'

function App() {

  function handleClick(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(data.get("name"))
    console.log(data.get("email"))
    console.log(data.get("tel"))
  }

  function handleChange(e) {

  }
  

  function Form() {
  const [cv, setCv] = useState(cvData)
    return (
      <>
      <form onSubmit={handleClick}>
        <h2>BASIC INFO</h2>
        <Fieldset>
          <Label>
            <Input></Input>
          </Label>
        </Fieldset>

        <button>SEND</button>
        <button>EDIT</button>
      </form>
      </>
    )
  }  
  
  function Label({children}) {
    const labels = ["Name: ", "Email: ", "Tel: ", "Test: "]
    const listLabels = labels.map((label, index) => {
      return <label htmlFor='tets' key={index}>{label}
        {children}
      </label>
    })
    return listLabels
  }

  function Input() {  // {person}
  //  const inputList = cv.
    return (
      <input
        id="hey"
        name="hey"
        value="test" // {person.basicInfo.name}
        onChange={handleChange}
      />
    )
  }

  function Fieldset({children}) {
    const categories = ["BASIC INFO", "EDUCATION", "WORK"]
    const listCategories = categories.map((category, index) => {
      return (
        <>
        <fieldset>
          <legend>{category}</legend>
          {children}
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
