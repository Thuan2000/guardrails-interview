/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import { loadFilesSync } from '@graphql-tools/load-files';
import { TypeSource } from '@graphql-tools/utils';
import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express';
import express, { Express } from 'express';

import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import Database from './services/database.service';

class App {
  private apolloServer: ApolloServer | null = null;
  private expressApp: Express | null = null;

  constructor() {
    this.initDatabaseService();
  }

  private initDatabaseService() {
    Database.connect();
  }

  public async start(): Promise<void> {
    this.expressApp = express();

    // Construct the config here
    const apolloServerConfig: ApolloServerExpressConfig = {
      typeDefs: this.__loadSchemas(),
      resolvers: this.__loadResolvers(),
      // TODO: If it's on production environment, must set it to false.
      introspection: true
    };
    this.apolloServer = new ApolloServer(apolloServerConfig);

    await this.apolloServer.start();
    this.apolloServer.applyMiddleware({
      app: this.expressApp,
      path: '/graphql'
    });
    this.expressApp.listen(process.env.PORT || 8080, () => {
      /* tslint:disable-next-line */
      console.log(`🚀  Server ready at ${process.env.PORT || 8080}`);
    });
  }

  private __loadResolvers(): Record<any, any> {
    const resolverArray = loadFilesSync(
      `${__dirname}/graphql/resolvers/**/*.resolver.*`
    );
    const resolvers = mergeResolvers(resolverArray);
    return resolvers;
  }

  private __loadSchemas(): TypeSource {
    const typeFiles = loadFilesSync(
      `${__dirname}/graphql/schemas/**/*.graphql`
    );
    const typeDefs = mergeTypeDefs(typeFiles);
    return typeDefs;
  }
}

export default App;
