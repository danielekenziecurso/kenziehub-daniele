import React, { useContext, useEffect } from "react";
import { StyledList } from "./styles";
import { TechContext } from "../../providers/TechContext";
import Detailstech from "../modais/Detailstech";

const ListTechs = () => {
  const { usersTechs, modalToEdit, setModalToEdit } = useContext(TechContext);

  return (
    <StyledList>
       {modalToEdit && <Detailstech />}
      <ul>
        {usersTechs.length > 0 &&
          usersTechs.map((techs, index) => (
            <li key={index} onClick={() => setModalToEdit(!modalToEdit)}>
              <h3>{techs.title}</h3>
              <p>{techs.status}</p>
            </li>
          ))}
      </ul>
    </StyledList>
  );
};

export default ListTechs;
