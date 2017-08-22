How To Use without security

Git clone https://github.com/hariadk/demo-sample.git
cd demo-sample/Demo-Sample
npm install
tsd install
Mongodb running on 27017(default port).
Goto config.ts and make isAutheticationEnabled = 'disabled'
open cmd, run 'gulp compile-ts' then run gulp.
Post a JSON {"name":"john","":"john"} to http://localhost:9999/data/users.
Hit the api to get data(http://localhost:9999/data/users)
Ensure node version is 5.7.0

