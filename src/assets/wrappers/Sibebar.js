import styled from "styled-components";
const Wrappers = styled.aside`
  z-index: 200;
  .sidebar-container {
    background-color: var(--secondary-500);
    position: fixed;
    min-height: 100vh;
    height: 100%;
    width: 250px;
    margin-left: -250px;
    transition: var(--transition);
  }
  .content {
    color: white;
    position: sticky;
    top: 0;
  }
  .logo {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  .show-sidebar {
    margin-left: 0;
  }
  header {
    height: 3rem;
    display: flex;
    align-items: center;
    padding-left: 2.5rem;
  }
  .nav-links {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    padding-left: 2rem;
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
`;
export default Wrappers;
