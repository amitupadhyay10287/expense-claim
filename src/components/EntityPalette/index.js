import React from "react";
import styled from "styled-components";
import DragableBox from "../DragableBox";

const Container = styled.div`
  margin-left: 10px;
  height: 556px;
  width: 100%;
  padding: 1rem;
  border: solid 1px #cacaca;
`;

export const Types = {
  emp: "emp",
  sup: "sup",
  adm: "adm"
};

const EntityPalette = ({ list }) => {
  return (
    <Container>
      <h2>Actions</h2>
      {list.map(({ id, title, type, width }) => (
        <DragableBox type={type} width={width} key={id} id={id} title={title} />
      ))}
    </Container>
  );
};

export default EntityPalette;
