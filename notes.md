# Steps

## Create app skeleton

```
npx create-react-app redux-shopping-cart
cd redux-shopping-cart
```

## Start web app

```
yarn start
```

## Install redux

```
yarn add react-redux redux
```

## Folder structure
- src: index.js and App.js
- src/components: React components
- src/redux: Redux components (store, actions, selectors)
- src/redux/reducers: Redux reducers

## Relationship

- index.js includes a provider from store.js to access the data
- App.js includes all React components under src/components
- React components includes Redux selectors to get data from the store,
and Redux actions to interact with the store
- Redux store includes all reducers available
- Redux selectors define how to get from the store through reducers
- Redux reducers act accordingly based on the Redux action types
