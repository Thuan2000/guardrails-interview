import gql from "graphql-tag";

export const Scan = gql`
  mutation Scan($input: ScanResultInput!) {
    scan(input: $input) {
      message
      success
    }
  }
`;
