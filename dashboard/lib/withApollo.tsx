import {
  ApolloClient,
  ApolloProvider,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { useRouter } from "next/router";
import nextWithApollo from "next-with-apollo";

export const generateApollo = (initialState, headers) => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_GRAPHQL_ENDPOINT,
    }),
    headers: {
      ...(headers as Record<string, string>),
    },
    cache: new InMemoryCache().restore(initialState || {}),
  });
};

const withApollo = nextWithApollo(
  ({ initialState, headers }) => {
    return generateApollo(initialState, headers);
  },
  {
    render: ({ Page, props }) => {
      const router = useRouter();
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...router} />
        </ApolloProvider>
      );
    },
  }
);

export default withApollo;
