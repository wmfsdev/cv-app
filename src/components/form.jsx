import { Fieldset } from "./fieldset"
import { Button } from "./button"
import { formStructure } from "./data"

export function Form({cv, setCv}) {
    return (
      <form onSubmit={handleClick}>
        <h1>CV</h1>
        <Fieldset legends={formStructure} cv={cv} setCv={setCv}/>
        {/* <Button title="SEND" type="submit"/>
        <Button title="EDIT" type="button" /> */}
      </form>
    )
}

function handleClick(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(data.get("name"))
    console.log(data.get("email"))
    console.log(data.get("what"))
}