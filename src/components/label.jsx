import Input from "./input"

export default function Label({legend, pos, cv, setCv}) {
  
    const listLabels = legend.labels.map((label, index) => {
    const inputKey = Object.keys(cv[pos])
    const inputValue = Object.values(cv[pos])
      return <label key={index}>{label}
        <Input inputKey={inputKey[index]} inputValues={inputValue[index]}  cv={cv} setCv={setCv}/>   
      </label>
    })
    return listLabels
}