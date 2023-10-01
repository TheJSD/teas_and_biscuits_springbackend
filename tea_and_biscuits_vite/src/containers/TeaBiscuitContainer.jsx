import { useEffect, useState } from "react";
import BiscuitList from "../components/BiscuitList";
import TeaList from "../components/TeaList";
import TeaBiscuitForm from "../components/TeaBiscuitForm";

const TeasContainer = () => {
  const [teas, setTeas] = useState([]);
  const [biscuits, setBiscuits] = useState([]);
  const BASE_URL = "http://localhost:8080";

  useEffect(() => {
    fetchTeas();
    fetchBiscuits();
  }, []);

  const fetchTeas = () => {
    fetch(BASE_URL + "/api/teas")
      .then((response) => response.json())
      .then((teas) => setTeas(teas));
  };

  const fetchBiscuits = () => {
    fetch(BASE_URL + "/api/biscuits")
      .then((response) => response.json())
      .then((biscuits) => setBiscuits(biscuits));
  };

  const handleTeaSubmit = (newTea) => {
    fetch(BASE_URL + "/api/teas", {
      method: "POST",
      body: JSON.stringify(newTea),
      headers: { "Content-Type": "application/json" },
    }).then(() => fetchTeas());
  };

  const handleBiscuitSubmit = (newBiscuit) => {
    fetch(BASE_URL + "/api/biscuits", {
      method: "POST",
      body: JSON.stringify(newBiscuit),
      headers: { "Content-Type": "application/json" },
    }).then(() => fetchBiscuits());
  };

  const handleTeaDelete = (teaToDelete) => {
    fetch(BASE_URL + "/api/tea/" + teaToDelete.id, {
      method: "DELETE"
    })
    const teasToKeep = teas.filter(tea => tea.id != teaToDelete.id)
    setTeas(teasToKeep)
  }

  const handleBiscuitDelete = (teaToDelete) => {
    fetch(BASE_URL + "/api/biscuit/" + teaToDelete.id, {
      method: "DELETE"
    })
    const biscuitToKeep = teas.filter(biscuit => biscuit.id != biscuitToDelete.id)
    setTeas(biscuitToKeep)
  }

  return (
    <>
      <TeaBiscuitForm
        onTeaSubmit={handleTeaSubmit}
        onBiscuitSubmit={handleBiscuitSubmit}
      />
      <TeaList teas={teas} 
        onTeaDelete={handleTeaDelete}
        setTeas={setTeas}
      />
      <BiscuitList biscuits={biscuits} 
        onBiscuitDelete={handleBiscuitDelete}
        setBiscuits={setBiscuits}
      />
    </>
  );
};

export default TeasContainer;
