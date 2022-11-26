## Backend Code Patterns Description

<a name="top"/>

The backend is using GraphQL as the API layer.
* `./src/models`: Contains all the classes wrapped by Sequelize ORM, responsible for performing CRUD operations at the database level.
* `./src/controllers`: Contains all the controller classes, responsible for doing business logic. For each queries/mutations, there is a corresponding controller function.
* `./src/graphql`: Contains the GraphQL queries/mutations.

<p align="right">(<a href="#top">back to top</a>)</p>
