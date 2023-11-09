import Label from "./label"

export function Fieldset({legends, cv, setCv}) {
    const listCategories = legends.map((legend, index) => {
      return (
        <fieldset key={index}>
          <legend key={index}>{legend.category}</legend>
            <Label legend={legends[index]} pos={index} cv={cv} setCv={setCv}/> 
        </fieldset>
      )
    })
    return listCategories
  }