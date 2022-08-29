import gql from "graphql-tag";

export const Scan = gql`
  mutation InputNewScan($input: ScanResultInput!) {
    inputNewScan(input: $input) {
      message
      success
    }
  }
`;

export const DeleteScan = gql`
  mutation DeleteScan($id: Int!) {
    deleteScan(id: $id) {
      id
      message
      success
    }
  }
`;

export const UpdateScan = gql`
  mutation UpdateScan($id: Int!, $input: ScanResultInput!) {
    updateScan(id: $id, input: $input) {
      message
      success
    }
  }
`;