import gql from "graphql-tag";

export const Scan = gql`
  mutation InputNewScan($input: ScanResultInput!) {
    inputNewScan(input: $input) {
      message
      success
    }
  }
`;
