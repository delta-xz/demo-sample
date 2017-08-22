## How To Use without security

1. Git clone https://github.com/hariadk/demo-sample.git
2. cd demo-sample/Demo-Sample
3. npm install
4. tsd install
5. Mongodb running on 27017(default port).
6. Goto config.ts and make isAutheticationEnabled = 'disabled'
7. open cmd, run 'gulp compile-ts' then run gulp.
8. Post a JSON {"name":"john","":"john"} to http://localhost:9999/data/users.
8. Hit the api to get data(http://localhost:9999/data/users)
9. Ensure node version is 5.7.0
