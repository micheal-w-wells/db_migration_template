from node:20
copy . .
run npm install
cmd ["npx", "knex", "migrate:latest", "--env", "production"]