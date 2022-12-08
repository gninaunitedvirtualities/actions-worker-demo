# kanopi-workers

Monorepo for Kanopi cloud functions currently hosted on [Cloudflare Workers](https://workers.dev)

## Setup
Once the repo has been checked out, run an npm install on the root and then an npm install inside the packages/order-fullfillment folder.

Then do an npm install -g wrangler to install wrangler (cloudflare) into the project. Once this is done, do a wrangler login and authenticate with cloudflare to make sure the environment is now ready to work.

It may be necessary to run a lerna boostrap to configure the packages in order to be able to complete de npm install correctly, as well as an npm audit fix to update some of the critical packages in the repository.

## Packages
- [kanopi-shared](packages/kanopi-shared)
- [order-fulfillment](packages/order-fulfillment)

## Development
Pre-commit hooks will automatically format and lint code during development but to run them automatically, use the following commands:
```
npm run format
npm run lint
```

See package READMEs for further development details.

## Unit Tests
Run the following command to initiate unit tests for all packages:
```
npm test
```
Tests will also be run automatically by pre-push hooks before changes are pushed to any branch.

## Deployment
The following commands will deploy all packages to the LOCAL, DEV and PROD environments, respectively:
```
npm run packages:publish
npm run packages:publish:dev
npm run packages:publish:prod
```

