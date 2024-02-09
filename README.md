Add basic db migrations to your app for easy db version control and migrations in openshift.

https://knexjs.org/

Install:
1. In the db folder of your repo, clone this repo, cd inside of it, rm -rf the .git directory so you don't have nested repos.

2. If you aren't using postgres, install the appropriate db drivers, to look for package names, look up the npm package for knex.js, nvm use 20 && npm install --save __package_name___.




To use:

Flow is like this:

On your local, in the knex folder, run npx migrate:make migration_name .
Then change the functions to async and add in await knex.raw (look at the examples).

Flow looks like this:

Webhook from github -> build config in openshift -> image tag -> deployment config looks at this and runs the container.  Knex in the container will run knex migrate:latest and all the new migrations will be run.

