import React, { useEffect } from "react";
import styled from "styled-components";
import Todo from "../Todo";
import './todo.css';

const List = ({ lists, setLists }) => {

    useEffect(() => {
        setLists(JSON.parse(localStorage.getItem('todoLists')) ?? []);
    }, []);

    useEffect(() => {
        localStorage.setItem('todoLists', JSON.stringify(lists));
    }, [lists]);

    const StyledTitle = styled.h2`
        text-align:center;
        padding-right:10rem;
    `;

    const Listing = styled.ul`
        width:fit-content;
        margin: 0 auto;
    `;

    return (
        <React.Fragment>
            {lists.length > 0 && <StyledTitle>Mes listes : </StyledTitle>}
            <Listing>
                {lists.map((todo, index) => {
                    return (<Todo key={`${todo.name}-${index}`} lists={lists} setLists={setLists} todo={todo} />);
                })}
            </Listing>
        </React.Fragment>
    );
};

export default List;