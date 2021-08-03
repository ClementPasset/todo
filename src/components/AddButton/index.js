import styled from "styled-components";
import { colors } from "../../utils/colors";

const StyledButton = styled.button`
    width: 60%;
    display:block;
    margin: 1rem auto;
    height:50px;
    border: none;
    background: linear-gradient(to bottom right, ${colors.green}, ${colors.olive});
    color: ${colors.yellow};
    font-size: 1.5rem;
    cursor: pointer;
    &:hover{
        background: linear-gradient(to bottom right, ${colors.olive}, ${colors.green});
    }
`;

const AddButton = ({ lists, setLists }) => {

    const addList = () => {
        const nombre = lists.length + 1;
        setLists([...lists, { name: `Liste ${nombre}`, list: [] }]);
    }

    return <StyledButton onClick={() => addList()}>Ajouter une liste</StyledButton>;
};

export default AddButton;