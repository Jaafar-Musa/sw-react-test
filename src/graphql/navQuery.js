import { gql } from "@apollo/client";

export const NAV_DATA = gql`
  query GetNavData {
    currencies {
      label
      symbol
    }
    categories{
      name
  }
  }
`;


