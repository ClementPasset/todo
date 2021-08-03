import styled from "styled-components";
import React, { useState } from "react";
import Header from "./Header";
import List from "./List";
import AddButton from "./AddButton";
import '../utils/GlobalStyle.css';

const StyledMain = styled.main`
  width: 60%;
  margin: 2rem auto;
`;

const App = () => {
    const [lists, setLists] = useState([]);

    return (
        <React.Fragment>
            <Header />
            <StyledMain>
                <List lists={lists} setLists={setLists} />
                <AddButton lists={lists} setLists={setLists} />
            </StyledMain>
        </React.Fragment>
    );
};

export default App;