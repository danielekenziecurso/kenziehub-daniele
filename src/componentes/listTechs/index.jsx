import React, { useContext } from "react";
import { StyledList } from "./styles";
import { TechContext } from "../../providers/TechContext";
import Detailstech from "../modais/Detailstech";

const ListTechs = () => {
  const { usersTechs, modalToEdit, setModalToEdit, setTechTitle, setTechsId,} = useContext(TechContext);

  const list = (tech) => {
    setModalToEdit(!modalToEdit);
    setTechTitle(tech.title);
    setTechsId(tech.id)
  };
  return (
    <StyledList>
      {modalToEdit && <Detailstech />}
      <ul>
        {usersTechs.length > 0 &&
          usersTechs.map((techs) => (
            <li key={techs.id} onClick={() => list(techs)}>
              <h3>{techs.title}</h3>
              <p>{techs.status}</p>
            </li>
          ))}
      </ul>
    </StyledList>
  );
};

export default ListTechs;
