import { useState } from "react"

const BiscuitList = ({ biscuits, handleBiscuitDelete, setBiscuits}) => {

  const [toEdit, setToEdit] = useState(false)
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')

  const selectBiscuitToEdit = (biscuit) => {
    setToEdit(biscuit.id)
    setName(biscuit.name)
    setBrand(biscuit.brand)
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
    handleBiscuitSubmit(payload)
    resetForm()
  }
  const handleBiscuitSubmit = (updatedBiscuit) => {
    
    fetch("http://localhost:8080/api/biscuits/" + toEdit, {
      method: "PUT",
      body: JSON.stringify(updatedBiscuit),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json())
    .then((biscuit) => updateBiscuit(biscuit));
  };

  const updateBiscuit = (updatedBiscuit) => {
    const filteredBiscuits = biscuits.filter((biscuit) => {
      return biscuit.id != updatedBiscuit.id
    })
    filteredBiscuits.push(updatedBiscuit)
    setBiscuits(filteredBiscuits)
  }

  return (
    <div id="biscuit-list">
      <h2>All the biccys!</h2>
      <ul>
        {biscuits.map(biscuit => {
          if (biscuit.id == toEdit) {
            return (<li>
              <form onSubmit={handleFormSubmit}>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" value={name} onChange={handleNameChange} />
              <label htmlFor="brand"> Brand: </label>
              <input type="text" name="brand" value={brand} onChange={handleBrandChange} />
              <input type="submit" value="Save" />
              </form></li>)}
          else {return (
              <li key={biscuit.name}>{biscuit.name} by {biscuit.brand} <button onClick={() => selectBiscuitToEdit(biscuit)}>EDIT</button> <button onClick={() => handleBiscuitDelete(biscuit)}>DELETE</button></li>
            )}
        })}
      </ul>
    </div>
  )
}

export default BiscuitList