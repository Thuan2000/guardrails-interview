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


export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  id: Scalars['Int'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export enum ESeverity {
  Low = 'LOW',
  High = 'HIGH',
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
  id: Scalars['Int'];
  type: Scalars['String'];
  ruleId: Scalars['String'];
  location: FindingLocation;
  metadata?: Maybe<FindingMetadata>;
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

export type FindingLocation = {
  __typename?: 'FindingLocation';
  path: Scalars['String'];
  begin: LocationLine;
  end?: Maybe<LocationLine>;
};

export type FindingMetadata = {
  __typename?: 'FindingMetadata';
  description: Scalars['String'];
  severity: ESeverity;
};

export type LocationLine = {
  __typename?: 'LocationLine';
  line: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  inputNewScan?: Maybe<Response>;
  deleteScan: DeleteResponse;
  updateScan: Response;
};


export type MutationInputNewScanArgs = {
  input: ScanResultInput;
};


export type MutationDeleteScanArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateScanArgs = {
  id: Scalars['Int'];
  input: ScanResultInput;
};

export type Query = {
  __typename?: 'Query';
  getScans?: Maybe<Array<ScanResult>>;
  getScan?: Maybe<ScanResult>;
};


export type QueryGetScanArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type Response = {
  __typename?: 'Response';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type ScanResult = {
  __typename?: 'ScanResult';
  id: Scalars['Int'];
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

export type DeleteScanMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteScanMutation = (
  { __typename?: 'Mutation' }
  & { deleteScan: (
    { __typename?: 'DeleteResponse' }
    & Pick<DeleteResponse, 'id' | 'message' | 'success'>
  ) }
);

export type UpdateScanMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ScanResultInput;
}>;


export type UpdateScanMutation = (
  { __typename?: 'Mutation' }
  & { updateScan: (
    { __typename?: 'Response' }
    & Pick<Response, 'message' | 'success'>
  ) }
);

export type GetScansQueryVariables = Exact<{ [key: string]: never; }>;


export type GetScansQuery = (
  { __typename?: 'Query' }
  & { getScans?: Maybe<Array<(
    { __typename?: 'ScanResult' }
    & Pick<ScanResult, 'id' | 'status' | 'repositoryName' | 'queuedAt' | 'scanningAt' | 'finishedAt'>
    & { findings: Array<(
      { __typename?: 'Finding' }
      & Pick<Finding, 'id' | 'ruleId' | 'type'>
      & { location: (
        { __typename?: 'FindingLocation' }
        & Pick<FindingLocation, 'path'>
        & { begin: (
          { __typename?: 'LocationLine' }
          & Pick<LocationLine, 'line'>
        ) }
      ) }
    )> }
  )>> }
);

export type GetScanQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetScanQuery = (
  { __typename?: 'Query' }
  & { getScan?: Maybe<(
    { __typename?: 'ScanResult' }
    & Pick<ScanResult, 'id' | 'status' | 'repositoryName' | 'queuedAt' | 'scanningAt' | 'finishedAt'>
    & { findings: Array<(
      { __typename?: 'Finding' }
      & Pick<Finding, 'id' | 'ruleId' | 'type'>
      & { location: (
        { __typename?: 'FindingLocation' }
        & Pick<FindingLocation, 'path'>
        & { begin: (
          { __typename?: 'LocationLine' }
          & Pick<LocationLine, 'line'>
        ), end?: Maybe<(
          { __typename?: 'LocationLine' }
          & Pick<LocationLine, 'line'>
        )> }
      ), metadata?: Maybe<(
        { __typename?: 'FindingMetadata' }
        & Pick<FindingMetadata, 'severity' | 'description'>
      )> }
    )> }
  )> }
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
export const DeleteScanDocument = gql`
    mutation DeleteScan($id: Int!) {
  deleteScan(id: $id) {
    id
    message
    success
  }
}
    `;
export type DeleteScanMutationFn = Apollo.MutationFunction<DeleteScanMutation, DeleteScanMutationVariables>;

/**
 * __useDeleteScanMutation__
 *
 * To run a mutation, you first call `useDeleteScanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteScanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteScanMutation, { data, loading, error }] = useDeleteScanMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteScanMutation(baseOptions?: Apollo.MutationHookOptions<DeleteScanMutation, DeleteScanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteScanMutation, DeleteScanMutationVariables>(DeleteScanDocument, options);
      }
export type DeleteScanMutationHookResult = ReturnType<typeof useDeleteScanMutation>;
export type DeleteScanMutationResult = Apollo.MutationResult<DeleteScanMutation>;
export type DeleteScanMutationOptions = Apollo.BaseMutationOptions<DeleteScanMutation, DeleteScanMutationVariables>;
export const UpdateScanDocument = gql`
    mutation UpdateScan($id: Int!, $input: ScanResultInput!) {
  updateScan(id: $id, input: $input) {
    message
    success
  }
}
    `;
export type UpdateScanMutationFn = Apollo.MutationFunction<UpdateScanMutation, UpdateScanMutationVariables>;

/**
 * __useUpdateScanMutation__
 *
 * To run a mutation, you first call `useUpdateScanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateScanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateScanMutation, { data, loading, error }] = useUpdateScanMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateScanMutation(baseOptions?: Apollo.MutationHookOptions<UpdateScanMutation, UpdateScanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateScanMutation, UpdateScanMutationVariables>(UpdateScanDocument, options);
      }
export type UpdateScanMutationHookResult = ReturnType<typeof useUpdateScanMutation>;
export type UpdateScanMutationResult = Apollo.MutationResult<UpdateScanMutation>;
export type UpdateScanMutationOptions = Apollo.BaseMutationOptions<UpdateScanMutation, UpdateScanMutationVariables>;
export const GetScansDocument = gql`
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
export const GetScanDocument = gql`
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

/**
 * __useGetScanQuery__
 *
 * To run a query within a React component, call `useGetScanQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScanQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetScanQuery(baseOptions: Apollo.QueryHookOptions<GetScanQuery, GetScanQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetScanQuery, GetScanQueryVariables>(GetScanDocument, options);
      }
export function useGetScanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetScanQuery, GetScanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetScanQuery, GetScanQueryVariables>(GetScanDocument, options);
        }
export type GetScanQueryHookResult = ReturnType<typeof useGetScanQuery>;
export type GetScanLazyQueryHookResult = ReturnType<typeof useGetScanLazyQuery>;
export type GetScanQueryResult = Apollo.QueryResult<GetScanQuery, GetScanQueryVariables>;