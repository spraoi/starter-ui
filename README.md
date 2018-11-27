# Starter UI

> A starting point for new [@spraoi](https://github.com/spraoi/) UI projects.

## Development Setup

TODO

## Testing & Linting

TODO

## Project Structure

Note that:

- `[stage]` is usually one of `dev`, `qa`, `demo` or `prod`
- `[variation]` is usually the name of the client the variation is for

### `config/`

This contains the configuration used to generate `./src/config.json`. Inheritance is as follows:

1. `default.yml` (lowest priority)
2. `default.[stage].yml`
3. `[variation].yml`
4. `[variation].[stage].yml` (highest priority)

If any of those configuration files exist, they are
[`deepmerged`](https://github.com/KyleAMathews/deepmerge).

### `src/components/`

TODO

### `src/containers/`

TODO

### `src/routes/`

The directories here behave similarly to the config files in [`config/`](#config). Inheritance is as follows:

1. `default/` (lowest priority)
2. `[variation]/` (highest priority)

Instead of merging config values, though, we "merge" the pages of our app. Here's an example:

- `src/routes/default/` contains `index.js` and `override.js`
- `src/routes/variation-one/` contains `override.js` and `new.js`

When we run `config=variation-one.dev yarn start`, Gatsby will create three pages for us:

- `/` from `src/routes/default/index.js`
- `/override` from `src/routes/variation-one/override.js`
- `/new` from `src/routes/variation-one/new.js`

## Tooling

TODO
