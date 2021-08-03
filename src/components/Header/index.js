import styled from "styled-components";
import { colors } from "../../utils/colors";

const StyledHeading = styled.h1`
  text-align:center;
  color:${colors.green}
`;

const Header = () => {
  return (
    <header>
      <StyledHeading>ToDo List</StyledHeading>
    </header>
  );
};

export default Header;