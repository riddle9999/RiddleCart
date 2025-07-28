import SearchIcon from "@mui/icons-material/Search";
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  cursor: pointer;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0px solid grey;
  align-items: center;
  display: flex;
  margin-left: 15px;
  padding: 10px;
`;

const Input = styled.input`
  border: solid teal;
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bolder;
  font-size: larger;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENP</Language>
          <SearchContainer>
            <Input placeholder="Serach Items"></Input>
            <SearchIcon style={{ color: "grey", iconSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>RIDDLE.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            {/* <Badge badgeContent={4} color="primary"> */}
            <ShoppingCartCheckoutOutlined />
            {/* </Badge> */}
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default navbar;
