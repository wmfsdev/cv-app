
export default function Input({inputKey, inputValues, cv, setCv}) {
 
  function handleInput(e) {
    setCv(cv.map(obj => {
        if (Object.hasOwn(obj, e.target.id)) {
          return {...obj, [e.target.id]: e.target.value}
        } else return obj
      }))
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