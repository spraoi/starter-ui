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

### [`configs/`](https://github.com/spraoi/starter-ui/tree/master/configs)

This contains the configuration used to generate `./src/config.json`. Inheritance is as follows:

1. `default.yml` (lowest priority)
2. `default.[stage].yml`
3. `[variation].yml`
4. `[variation].[stage].yml` (highest priority)

If any of those configuration files exist, they are
[`deepmerged`](https://github.com/KyleAMathews/deepmerge).

### [`src/themes/`](https://github.com/spraoi/starter-ui/tree/master/src/themes)

Themes are used by components in this repo as well as any [common-ui](https://github.com/spraoi/common-ui) components
that have styles associated with them. This gives us the ability to have shared components that respect the look and
feel of our individual UI projects.

### [`src/components/`](https://github.com/spraoi/starter-ui/tree/master/src/components)

TODO

### [`src/containers/`](https://github.com/spraoi/starter-ui/tree/master/src/containers)

Container components should:

- provide data to their children
- provide data manipulation functions to their children
- not do anything else

This gives us the flexibility to have pages (routes) reuse existing container components.

### [`src/routes/`](https://github.com/spraoi/starter-ui/tree/master/src/routes)

The directories here behave similarly to the config files in [`config/`](#config). Inheritance is as follows:

1. `default/` (lowest priority)
2. `[variation]/` (highest priority)

Instead of merging config values, though, we "merge" the pages of our app. Here's an example:

- `src/routes/default/` contains `index.js` and `override.js`
- `src/routes/spraoi/` contains `override.js` and `new.js`

When we run `config=spraoi.dev yarn start`, Gatsby will create three pages for us:

- `/` from `src/routes/default/index.js`
- `/override` from `src/routes/spraoi/override.js`
- `/new` from `src/routes/spraoi/new.js`

## Tooling

TODO

### styled-components

TODO

### final-form

TODO
