

export default function Input({inputKey, inputValues, onInput}) {
 
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
  
  

  

  
  // IGNORE
  
  // function handleChange(e) {
    //   const newState = data.map((obj, index) => {
    //     if (Object.hasOwn(obj, e.target.id)) { // if key of object matches id of element     
    //       return {...obj, [e.target.id]: e.target.value}
    //     }  return obj
    //   })
    //   console.log(newState)
    //   setCv(newState)
    // }