/* tslint:disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};


export type IESeverity =
  | 'HIGH'
  | 'LOW'
  | 'MODERATE';

export type IEStatus =
  | 'Queued'
  | 'InProgress'
  | 'Success'
  | 'Failure';

export type IFinding = {
  type: Scalars['String'];
  ruleId: Scalars['String'];
  location: ILocation;
};

export type IFindingInput = {
  type: Scalars['String'];
  ruleId: Scalars['String'];
  locationPath: Scalars['String'];
  locationBeginLine: Scalars['Int'];
  locationEndLine: Scalars['Int'];
  metaDescription: Scalars['String'];
  metaSeverity: IESeverity;
};

export type ILocation = {
  path: Scalars['String'];
  begin: ILocationLine;
  end?: Maybe<ILocationLine>;
};

export type ILocationLine = {
  line: Scalars['Int'];
};

export type IMutation = {
  inputNewScan?: Maybe<IResponse>;
};


export type IMutationInputNewScanArgs = {
  input: IScanResultInput;
};

export type IQuery = {
  getScans?: Maybe<Array<IScanResult>>;
};

export type IResponse = {
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type IScanResult = {
  repositoryName: Scalars['String'];
  status: IEStatus;
  findings: Array<IFinding>;
  queuedAt: Scalars['Date'];
  scanningAt: Scalars['Date'];
  finishedAt: Scalars['Date'];
};

export type IScanResultInput = {
  repositoryName: Scalars['String'];
  status: IEStatus;
  findings: Array<Maybe<IFindingInput>>;
  queuedAt: Scalars['Date'];
  scanningAt: Scalars['Date'];
  finishedAt: Scalars['Date'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type IResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  ScanResult: ResolverTypeWrapper<IScanResult>;
  String: ResolverTypeWrapper<Scalars['String']>;
  EStatus: IEStatus;
  Finding: ResolverTypeWrapper<IFinding>;
  Location: ResolverTypeWrapper<ILocation>;
  LocationLine: ResolverTypeWrapper<ILocationLine>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Mutation: ResolverTypeWrapper<{}>;
  ScanResultInput: IScanResultInput;
  FindingInput: IFindingInput;
  ESeverity: IESeverity;
  Response: ResolverTypeWrapper<IResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  Query: {};
  ScanResult: IScanResult;
  String: Scalars['String'];
  Finding: IFinding;
  Location: ILocation;
  LocationLine: ILocationLine;
  Int: Scalars['Int'];
  Date: Scalars['Date'];
  Mutation: {};
  ScanResultInput: IScanResultInput;
  FindingInput: IFindingInput;
  Response: IResponse;
  Boolean: Scalars['Boolean'];
};

export interface IDateScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['Date'], any> {
  name: 'Date';
}

export type IFindingResolvers<ContextType = any, ParentType extends IResolversParentTypes['Finding'] = IResolversParentTypes['Finding']> = {
  type?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  ruleId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<IResolversTypes['Location'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ILocationResolvers<ContextType = any, ParentType extends IResolversParentTypes['Location'] = IResolversParentTypes['Location']> = {
  path?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  begin?: Resolver<IResolversTypes['LocationLine'], ParentType, ContextType>;
  end?: Resolver<Maybe<IResolversTypes['LocationLine']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ILocationLineResolvers<ContextType = any, ParentType extends IResolversParentTypes['LocationLine'] = IResolversParentTypes['LocationLine']> = {
  line?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IMutationResolvers<ContextType = any, ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']> = {
  inputNewScan?: Resolver<Maybe<IResolversTypes['Response']>, ParentType, ContextType, RequireFields<IMutationInputNewScanArgs, 'input'>>;
};

export type IQueryResolvers<ContextType = any, ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']> = {
  getScans?: Resolver<Maybe<Array<IResolversTypes['ScanResult']>>, ParentType, ContextType>;
};

export type IResponseResolvers<ContextType = any, ParentType extends IResolversParentTypes['Response'] = IResolversParentTypes['Response']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IScanResultResolvers<ContextType = any, ParentType extends IResolversParentTypes['ScanResult'] = IResolversParentTypes['ScanResult']> = {
  repositoryName?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<IResolversTypes['EStatus'], ParentType, ContextType>;
  findings?: Resolver<Array<IResolversTypes['Finding']>, ParentType, ContextType>;
  queuedAt?: Resolver<IResolversTypes['Date'], ParentType, ContextType>;
  scanningAt?: Resolver<IResolversTypes['Date'], ParentType, ContextType>;
  finishedAt?: Resolver<IResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  Finding?: IFindingResolvers<ContextType>;
  Location?: ILocationResolvers<ContextType>;
  LocationLine?: ILocationLineResolvers<ContextType>;
  Mutation?: IMutationResolvers<ContextType>;
  Query?: IQueryResolvers<ContextType>;
  Response?: IResponseResolvers<ContextType>;
  ScanResult?: IScanResultResolvers<ContextType>;
};

