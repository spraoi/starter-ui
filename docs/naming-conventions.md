# Naming Conventions

## GraphQL Queries, Mutations & Subscription

| Type           | Name                   | File                                       |
| :------------- | :--------------------- | :----------------------------------------- |
| `mutation`     | `createThing`          | `mutations/create-thing.gql`               |
| `mutation`     | `deleteThing`          | `mutations/delete-thing.gql`               |
| `mutation`     | `updateThing`          | `mutations/update-thing.gql`               |
| `query`        | `allThing`             | `queries/all-thing.gql`                    |
| `query`        | `thing`                | `queries/thing.gql`                        |
| `subscription` | `subscribeCreateThing` | `subscriptions/subscribe-create-thing.gql` |
| `subscription` | `subscribeDeleteThing` | `subscriptions/subscribe-delete-thing.gql` |
| `subscription` | `subscribeUpdateThing` | `subscriptions/subscribe-update-thing.gql` |

Where `thing` is the type.
