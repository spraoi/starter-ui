# Starter UI

> A starting point for new [@spraoi](https://github.com/spraoi/) UI projects.

## Development Setup

TODO

## Testing & Linting

TODO

## Project Structure

### `./config/`

Contains the configuration used to generate `./src/config.json`. Inheritance is as follows:

1. `default.yml` (lowest priority)
2. `default.[stage].yml`
3. `[variation].yml`
4. `[variation].[stage].yml` (highest priority)

Note that:

- `[stage]` is usually one of `dev`, `qa`, `demo` or `prod`
- `[variation]` is usually the name of the client the variation is for

If any of those configuration files exist, they are
[`deepmerged`](https://github.com/KyleAMathews/deepmerge).
See our
[`@spraoi/gatsby-plugin`](https://github.com/spraoi/common-ui/blob/master/packages/gatsby-plugin/gatsby-node.js)
package for details.

### `./src/components/`

TODO

### `./src/containers/`

TODO

### `./src/routes/`

TODO

## Tooling

TODO
