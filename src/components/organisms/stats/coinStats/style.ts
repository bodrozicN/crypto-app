import styled from "styled-components";

import { Grid_12_col } from "../../../../style";

export const Wrapper = styled.div`
  ${Grid_12_col};
  row-gap: 3.4rem;
  position: relative;

  .anchor-container {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0%;
    left: 16%;
    height: 100%;
    width: 1px;
    background-color: #fff;
    opacity: 0.3;
  }

  & > *:nth-child(1),
  & > *:nth-child(5) {
    grid-column: 1 / 5;
  }

  & > *:nth-child(2),
  & > *:nth-child(6) {
    grid-column: 5 / 8;
  }

  & > *:nth-child(3),
  & > *:nth-child(7) {
    grid-column: 8 / 11;
  }
  & > *:nth-child(4),
  & > *:nth-child(8) {
    grid-column: 11 / -1;
  }

  @media (max-width: 560px) {
    &::after {
      content: "";
      display: none;
    }

    row-gap: 2.4rem;
    column-gap: 5px;
    & > *:nth-child(1),
    & > *:nth-child(5) {
      grid-column: 1 / 3;
    }

    & > *:nth-child(2),
    & > *:nth-child(6) {
      grid-column: 3 / 7;
    }

    & > *:nth-child(3),
    & > *:nth-child(7) {
      grid-column: 7 / 10;
    }
    & > *:nth-child(4),
    & > *:nth-child(8) {
      grid-column: 10 / -1;
    }
  }
`;
