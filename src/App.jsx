import { useState } from 'react'
import { cvData } from './components/data'
import { Form } from './components/form'
import './App.css'


function App() {

const [cv, setCv] = useState(cvData)


  function DisplayCV({cv}) {
    return (
      <h1>{cv[0].name}</h1>
    )
  }

  return (
    <>
    <Form cv={cv} setCv={setCv}/>  
    <DisplayCV cv={cv}/>
    </>
  )
}

export default App