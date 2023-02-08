import styled from "styled-components";
const Wrappers = styled.div`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    /* width: 90vw; */
    margin: 0 auto;
    padding: 2rem 0;
    background-color: "#F0F0F7";
    padding: 2rem 4rem;
  }
  .not-active {
    transition: var(--transition);
    margin-left: 250px;
  }

  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      /* width: 90%; */
    }
  }
  @media (max-width: 500px) {
    .dashboard-page {
      padding: 1.5rem;
      font-size: 0.7rem;
    }
  }
`;

export default Wrappers;
