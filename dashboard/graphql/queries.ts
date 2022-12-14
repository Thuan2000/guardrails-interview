import gql from "graphql-tag";

export const getScansQuery = gql`
  query GetScans {
    getScans {
      id
      status
      repositoryName
      queuedAt
      scanningAt
      finishedAt
      findings {
        id
        location {
          path
          begin {
            line
          }
        }
        ruleId
        type
      }
    }
  }
`;

export const getScanQuery = gql`
  query GetScan($id: Int!) {
    getScan(id: $id) {
      id
      status
      repositoryName
      queuedAt
      scanningAt
      finishedAt
      findings {
        id
        ruleId
        type
        location {
          begin {
            line
          }
          end {
            line
          }
          path
        }
        metadata {
          severity
          description
        }
      }
    }
  }
`;