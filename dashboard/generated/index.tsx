// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};


export enum ESeverity {
  High = 'HIGH',
  Low = 'LOW',
  Moderate = 'MODERATE'
}

export enum EStatus {
  Queued = 'Queued',
  InProgress = 'InProgress',
  Success = 'Success',
  Failure = 'Failure'
}

export type Finding = {
  __typename?: 'Finding';
  type: Scalars['String'];
  ruleId: Scalars['String'];
  location: Location;
};

export type FindingInput = {
  type: Scalars['String'];
  ruleId: Scalars['String'];
  locationPath: Scalars['String'];
  locationBeginLine: Scalars['Int'];
  locationEndLine: Scalars['Int'];
  metaDescription: Scalars['String'];
  metaSeverity: ESeverity;
};

export type Location = {
  __typename?: 'Location';
  path: Scalars['String'];
  begin: LocationLine;
  end?: Maybe<LocationLine>;
};

export type LocationLine = {
  __typename?: 'LocationLine';
  line: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  inputNewScan?: Maybe<Response>;
};


export type MutationInputNewScanArgs = {
  input: ScanResultInput;
};

export type Query = {
  __typename?: 'Query';
  getScans?: Maybe<Array<ScanResult>>;
};

export type Response = {
  __typename?: 'Response';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type ScanResult = {
  __typename?: 'ScanResult';
  repositoryName: Scalars['String'];
  status: EStatus;
  findings: Array<Finding>;
  queuedAt: Scalars['Date'];
  scanningAt: Scalars['Date'];
  finishedAt: Scalars['Date'];
};

export type ScanResultInput = {
  repositoryName: Scalars['String'];
  status: EStatus;
  findings: Array<Maybe<FindingInput>>;
  queuedAt: Scalars['Date'];
  scanningAt: Scalars['Date'];
  finishedAt: Scalars['Date'];
};

export type InputNewScanMutationVariables = Exact<{
  input: ScanResultInput;
}>;


export type InputNewScanMutation = (
  { __typename?: 'Mutation' }
  & { inputNewScan?: Maybe<(
    { __typename?: 'Response' }
    & Pick<Response, 'message' | 'success'>
  )> }
);

export type GetScansQueryVariables = Exact<{ [key: string]: never; }>;


export type GetScansQuery = (
  { __typename?: 'Query' }
  & { getScans?: Maybe<Array<(
    { __typename?: 'ScanResult' }
    & Pick<ScanResult, 'status' | 'repositoryName' | 'queuedAt' | 'scanningAt' | 'finishedAt'>
    & { findings: Array<(
      { __typename?: 'Finding' }
      & Pick<Finding, 'ruleId' | 'type'>
      & { location: (
        { __typename?: 'Location' }
        & Pick<Location, 'path'>
        & { begin: (
          { __typename?: 'LocationLine' }
          & Pick<LocationLine, 'line'>
        ) }
      ) }
    )> }
  )>> }
);


export const InputNewScanDocument = gql`
    mutation InputNewScan($input: ScanResultInput!) {
  inputNewScan(input: $input) {
    message
    success
  }
}
    `;
export type InputNewScanMutationFn = Apollo.MutationFunction<InputNewScanMutation, InputNewScanMutationVariables>;

/**
 * __useInputNewScanMutation__
 *
 * To run a mutation, you first call `useInputNewScanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInputNewScanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inputNewScanMutation, { data, loading, error }] = useInputNewScanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInputNewScanMutation(baseOptions?: Apollo.MutationHookOptions<InputNewScanMutation, InputNewScanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InputNewScanMutation, InputNewScanMutationVariables>(InputNewScanDocument, options);
      }
export type InputNewScanMutationHookResult = ReturnType<typeof useInputNewScanMutation>;
export type InputNewScanMutationResult = Apollo.MutationResult<InputNewScanMutation>;
export type InputNewScanMutationOptions = Apollo.BaseMutationOptions<InputNewScanMutation, InputNewScanMutationVariables>;
export const GetScansDocument = gql`
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

/**
 * __useGetScansQuery__
 *
 * To run a query within a React component, call `useGetScansQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScansQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetScansQuery(baseOptions?: Apollo.QueryHookOptions<GetScansQuery, GetScansQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetScansQuery, GetScansQueryVariables>(GetScansDocument, options);
      }
export function useGetScansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetScansQuery, GetScansQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetScansQuery, GetScansQueryVariables>(GetScansDocument, options);
        }
export type GetScansQueryHookResult = ReturnType<typeof useGetScansQuery>;
export type GetScansLazyQueryHookResult = ReturnType<typeof useGetScansLazyQuery>;
export type GetScansQueryResult = Apollo.QueryResult<GetScansQuery, GetScansQueryVariables>;