import { useState } from 'react'
import { cvData } from './components/data'
import { Form } from './components/form'
import './App.css'


function Employment({cv}) {
  const employmentList = cv.filter((obj) => obj.id === 'employment')
  console.log(employmentList)

  const jobs = employmentList.map((job, index) => {
   console.log(index)
    return (
      <>
        <p key={"1"}>{job.company}</p>
        <p key={"2"}>{job.date}</p>
        <p key={"3"}>{job.role}</p>
      </>
    )
  })
  return jobs
}

function App() {

const [cv, setCv] = useState(cvData)

  return (
    <>
    <Form cv={cv} setCv={setCv}/>  
    <DisplayCV cv={cv}/>
    </>
  )
}

function DisplayCV({cv}) {
  return (
  <div className='cvContainer'>
    
    <h1>{cv[0].name}</h1>
    <h2>email: {cv[0].email} tel: {cv[0].tel}</h2>
    
    
      <h2>EDUCATION</h2>
      <p>{cv[1].institute}</p>
      <p>{cv[1].dates}</p>
      <p>{cv[1].subject}</p>
   
      <h2>EMPLOYMENT</h2>
    <Employment cv={cv} />

  </div>
  )
}


export default App