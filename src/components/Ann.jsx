import styled from "styled-components";
import React from "react";

const Container = styled.div`
  background-color: teal;
  height: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: smaller;
`;

const Ann = () => {
  return <Container>Sale! Sale! Sale! 30% off on all products.</Container>;
};

export default Ann;
