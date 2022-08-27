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
};

export type FindingInput = {
  type: Scalars['String'];
};

export type FindingLocationInput = {
  path: Scalars['String'];
  positions: PositionsInput;
};

export type FindingMetadataInput = {
  description: Scalars['String'];
  severity: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  scan?: Maybe<Response>;
};


export type MutationScanArgs = {
  input: ScanResultInput;
};

export type PositionsBeginInput = {
  line: Scalars['Int'];
};

export type PositionsInput = {
  begin: PositionsBeginInput;
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
  findings: Array<Maybe<FindingInput>>;
};

export type ScanMutationVariables = Exact<{
  input: ScanResultInput;
}>;


export type ScanMutation = (
  { __typename?: 'Mutation' }
  & { scan?: Maybe<(
    { __typename?: 'Response' }
    & Pick<Response, 'message' | 'success'>
  )> }
);


export const ScanDocument = gql`
    mutation Scan($input: ScanResultInput!) {
  scan(input: $input) {
    message
    success
  }
}
    `;
export type ScanMutationFn = Apollo.MutationFunction<ScanMutation, ScanMutationVariables>;

/**
 * __useScanMutation__
 *
 * To run a mutation, you first call `useScanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useScanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [scanMutation, { data, loading, error }] = useScanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useScanMutation(baseOptions?: Apollo.MutationHookOptions<ScanMutation, ScanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ScanMutation, ScanMutationVariables>(ScanDocument, options);
      }
export type ScanMutationHookResult = ReturnType<typeof useScanMutation>;
export type ScanMutationResult = Apollo.MutationResult<ScanMutation>;
export type ScanMutationOptions = Apollo.BaseMutationOptions<ScanMutation, ScanMutationVariables>;