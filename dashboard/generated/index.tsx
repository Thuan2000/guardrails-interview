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

export type FindingInput = {
  type: Scalars['String'];
  ruleId: Scalars['String'];
  locationPath: Scalars['String'];
  locationBeginLine: Scalars['Int'];
  locationEndLine: Scalars['Int'];
  metaDescription: Scalars['String'];
  metaSeverity: ESeverity;
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
  getScans?: Maybe<Scalars['String']>;
};

export type Response = {
  __typename?: 'Response';
  message: Scalars['String'];
  success: Scalars['Boolean'];
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