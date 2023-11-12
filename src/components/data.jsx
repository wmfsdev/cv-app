
export const cvData = [
    { 
      id: 'basic',
      name: 'John Doe',
      email: 'email@hello.com',
      tel: 12345678,
    },
    { 
      id: 'education',
      institute: 'School of Life',
      dates: '13.01.11 - 14.02.99',
      subject: 'a bit of everything',
    },
    { 
      id: 'employment',
      company: 'Macrosoft',
      date: '13.01.11 - 14.02.99',
      role: 'Macoroni Maker',
    },
  ]


export const formStructure = [
  {
    
    category: "BASIC INFO",
    labels: [null, "Name: ", "Email: ", "Tel: "]
  },
  {
    category: "EDUCATION",
    labels: [null, "Institute/School: ", "Date(s): ", "Qualification: "],
  },
  {
    category: "EMPLOYMENT",
    labels: [null, "Company: ", "Date(s): ", "Role: "],
    button: " "
  }
]