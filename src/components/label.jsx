import Input from "./input"
import { Button } from "./button"

export default function Label({legend, pos, cv, setCv}) {
 
    const listLabels = legend.labels.map((label, index) => {
      const inputKey = Object.keys(cv[pos])
      const inputValue = Object.values(cv[pos])
      
       if (label === null) {
        return null
       } else
      return <label key={index}>
        {label}
        
        <Input inputKey={inputKey[index]} inputValues={inputValue[index]} cv={cv} setCv={setCv}/>   
      </label>
    })
    
    if (legend.button) {
      const buttonText = "ADD"
      const button =
        <label key={legend.button}>
            {legend.button}
            <Button 
              // key={legend.button} 
              title={buttonText} 
              type={"button"} 
              cv={cv} 
              setCv={setCv}
            />   
          </label>
      listLabels.push(button)
    }

    return listLabels
}