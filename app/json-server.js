const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')

// /!\ Bind the router db to the app
app.db = router.db

server.use((req, res, next) => {
    setTimeout(next, 1000)
})

app.use(middleware)
app.use(auth)
app.use(router)

app.listen(8080, () => {
    console.log(`JSON Server is running on 8080 port...`)
})

// https://www.npmjs.com/package/json-server-auth
// https://www.npmjs.com/package/json-server