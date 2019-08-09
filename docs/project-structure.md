# Project Structure

Having a consistent, battle-tested project structure has been known to increase
developer happiness.

## Notes

- `[stage]` is usually one of `dev`, `qa`, `demo` or `prod`
- `[variation]` is usually the name of the client the variation is for

## [`configs/`](https://github.com/spraoi/starter-ui/tree/master/configs)

Here you will find the configuration files used to generate `./src/config.json`.
Inheritance is as follows:

1. `default.yml` (lowest priority)
2. `default.[stage].yml`
3. `[variation].yml`
4. `[variation].[stage].yml` (highest priority)

If any of those configuration files exist, they are deeply merged (based on
priority).

## [`docs/`](https://github.com/spraoi/starter-ui/tree/master/docs)

Read them, respect them, love them, and try to keep them up-to-date.

## [`src/components/`](https://github.com/spraoi/starter-ui/tree/master/src/components)

Components contain the highly reusable chunks of UI. A basic component is
structured like so:

```
ComponentName
├── index.js
└── __tests__
    └── index.test.js
```

Putting the component in a folder allows us to break apart larger components
without polluting the `components/` directory. To generate a new component, you
can use the `spraoi new-component` command.

It&rsquo;s important to be thoughtful when designing a component&rsquo;s
interface (programmatic & UI). That way, if it is ever required in another
project, transitioning to a [common-ui](https://github.com/spraoi/common-ui)
package is easy.

## [`src/containers/`](https://github.com/spraoi/starter-ui/tree/master/src/containers)

Container components should be structured like [components](#srccomponents).
They should also:

- be wrapped with the `<Layout />` component
- provide data to their children
- provide data manipulation functions to their children
- not do anything else

This gives us the flexibility to have routes that require the same data to reuse
existing API related logic.

## [`src/graphql/`](https://github.com/spraoi/starter-ui/tree/master/src/graphql)

GraphQL queries, subscriptions and mutations should be added and maintained
here. Eventually, these could be automatically generated based on the GraphQL
schema in AWS AppSync.

## [`src/images/`](https://github.com/spraoi/starter-ui/tree/master/src/images)

Images & icons used in the project should be placed here.

## [`src/images/icons/`](https://github.com/spraoi/starter-ui/tree/master/src/images/icons)

This folder has two special features:

1. This is the folder that `yarn svgo` targets—enabling easy svg optimizations.
2. On `yarn start`, `@spraoi/gatsby-plugin` automatically generates the
   `src/components/Icon/index.js` component based on the icons in this
   directory.

## [`src/routes/`](https://github.com/spraoi/starter-ui/tree/master/src/routes)

The directories here behave similarly to the config files in
[`configs/`](#configs). Inheritance is as follows:

1. `default/` (lowest priority)
2. `[variation]/` (highest priority)

Instead of merging config values, though, we "merge" the pages of our app.
Here's an example:

- `src/routes/default/` contains `index.js` and `override.js`
- `src/routes/spraoi/` contains `override.js` and `new.js`

When we run `config=spraoi.dev yarn start`, Gatsby will create three pages for
us:

- `/` from `src/routes/default/index.js`
- `/override` from `src/routes/spraoi/override.js`
- `/new` from `src/routes/spraoi/new.js`

## [`src/themes/`](https://github.com/spraoi/starter-ui/tree/master/src/themes)

Themes are used by components in this repo as well as any
[common-ui](https://github.com/spraoi/common-ui) components that have styles
associated with them. This makes it easy to maintain consistency across any
given UI/UI variation. The theme object shape can be seen/modified in the
[base `<App />` component](https://github.com/spraoi/common-ui/blob/master/packages/base/components/App/types.js).
