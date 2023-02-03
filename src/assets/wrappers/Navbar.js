import styled from "styled-components";
const Wrappers = styled.nav`
  background-color: var(--secondary-500);
  .container {
    background-color: var(--primary-white);
    /* background-color: gray; */
    width: calc(100% - 250px);
    margin-left: 250px;
    height: 70px;
    border-top-left-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: var(--transition);
    padding-right: 1rem;
  }
  .show-navbar {
    margin-left: 0px;
    width: 100%;
  }
  @media (max-width: 500px) {
    input,
    .searchbtn {
      display: none;
    }
    background-color: var(--primary-white);
  }
`;
export default Wrappers;
