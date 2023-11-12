import Label from "./label"

export function Fieldset({legends, cv, setCv}) {
    const listCategories = legends.map((legend, index) => {
      const button = legend.button
     // console.log(listTest)
      return (
        <fieldset key={index}>
          <legend key={index}>{legend.category}</legend>
            <Label button={button} legend={legends[index]} pos={index} cv={cv} setCv={setCv}/> 
        </fieldset>
      )
    })
    return listCategories
  }