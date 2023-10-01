import { useState } from "react"

const TeaList = ({ teas, onTeaDelete, setTeas }) => {

  const [toEdit, setToEdit] = useState(false)
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')

  const selectTeaToEdit = (tea) => {
    setToEdit(tea.id)
    setName(tea.name)
    setBrand(tea.brand)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleBrandChange = (event) => {
    setBrand(event.target.value)
  }
  const resetForm = () => {
    setName('')
    setBrand('')
    setToEdit(false)
  }
  const handleFormSubmit = (event) => {
    event.preventDefault()
    const payload = {
      name,
      brand
    }
    handleTeaSubmit(payload)
    resetForm()
  }
  const handleTeaSubmit = (updatedTea) => {
    
    fetch("http://localhost:8080/api/teas/" + toEdit, {
      method: "PUT",
      body: JSON.stringify(updatedTea),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json())
    .then((tea) => updateTea(tea));
  };


  const updateTea = (updatedTea) => {

    const filteredTeas = teas.filter((tea) => {
      return tea.id != updatedTea.id
    })
    filteredTeas.push(updatedTea)
    setTeas(filteredTeas)
  }

  return (
    <div id="tea-list">
      <h2>All the teas!</h2>
      <ul>
        {teas.map(tea => {
          if (tea.id == toEdit) {
            return (<li>
              <form onSubmit={handleFormSubmit}>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" value={name} onChange={handleNameChange} />
              <label htmlFor="brand"> Brand: </label>
              <input type="text" name="brand" value={brand} onChange={handleBrandChange} />
              <input type="submit" value="Save" />
              </form></li>)}
          else {return (
            <li key={tea.name}>{tea.name} by {tea.brand} 
              <button onClick={() => selectTeaToEdit(tea)}>EDIT</button>
              <button onClick={() => onTeaDelete(tea)}>DELETE</button></li>
          )}
        })}
      </ul>
    </div>
  )
}

export default TeaList