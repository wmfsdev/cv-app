
export const cvData = [
    { 
      name: 'john' ,
      email: 'doe' ,
      tel: 1234 ,
    },
    { 
      where: 'bob' ,
      when: 'doe' ,
      what: 5678 ,
    },
  ]


export const formStructure = [
  {
    category: "BASIC INFO",
    labels: ["Name: ", "Email: ", "Tel: "]
  },
  {
    category: "EDUC",
    labels: ["where: ", "when: ", "what: "]
  },
]

// function Form() {
// const [cv, setCv] = useState(cvData)

// <Fieldset legends={formStructure} data={cv}

// function Fieldset({legends, data}) {

//   <Label legend={legends[index]} data={data} pos={index}/> 