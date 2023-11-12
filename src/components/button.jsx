import { formStructure } from "./data"


export function Button({title, type, cv, setCv}) {
    return (
      <button
        key={title}
        id={title} 
        type={type}
        onClick={handleAdd}
        // some kind of hidden property
      >
        {title}
      </button>
    ) 

    function handleAdd() {

      const institute = `institute${cv.length}`
      const dates = `dates${cv.length}`
      const subject = `subject${cv.length}`
      

      setCv([
          ...cv, { 
          id: 'education',
          [institute]: '',
          [dates]: '',
          [subject]: '',}
          ])    
          
        formStructure.push({ 
          category: "",
          labels: [null, "Institute: ", "Date of Study: ", "Subject: "],
         
      })
         
    }
}