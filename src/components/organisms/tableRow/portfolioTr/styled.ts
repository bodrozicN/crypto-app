import styled from "styled-components";
import { TableRow_12_col } from "../../../../style";

export const StyledPortfolioTr = styled.tr`
  ${TableRow_12_col}

  .delete-btn {
    font-size: 2rem;
    background-color: transparent;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(11, 1fr);
    & > *:nth-child(3) {
      display: none;
    }
    & > *:nth-child(4) {
      grid-column: 4 / 6;
    }
    & > *:nth-child(5) {
      grid-column: 6 / 8;
    }
    & > *:nth-child(6) {
      grid-column: 8 / 10;
    }
    & > *:nth-child(7) {
      grid-column: 10 / -1;
    }
  }

  @media (max-width: 768px) {
    & > *:nth-child(7) {
      justify-self: center;
    }
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(9, 1fr);
    & > *:nth-child(5) {
      display: none;
    }
    & > *:nth-child(6) {
      grid-column: 6 / 9;
    }
    & > *:nth-child(7) {
      grid-column: 9 / -1;
    }
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(7, 1fr);
    & > *:nth-child(6) {
      display: none;
    }

    & > *:nth-child(4) {
      grid-column: 5 / 7;
    }

    & > *:nth-child(7) {
      /* grid-column: 7 / -1; */
    }
  }
`;
