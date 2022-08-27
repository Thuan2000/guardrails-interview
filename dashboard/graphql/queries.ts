import gql from "graphql-tag";

export const getScansQuery = gql`
  query GetScans {
    getScans {
      status
      repositoryName
      queuedAt
      scanningAt
      finishedAt
      findings {
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