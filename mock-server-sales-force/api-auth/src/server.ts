import Koa from 'koa'
import cors from 'koa2-cors'
import helmet from 'koa-helmet'
import bodyParser from 'koa-bodyparser'
import yenv from 'yenv'
import log from 'fancy-log'
import cors from 'koa2-cors'

import {
  access as accessLogger,
  error as errorLogger,
} from './utils/api-logger'
import csp from './utils/csp'
import compress from './utils/compress'
import notFavicon from './utils/api-not-favicon'
import apiError from './utils/api-error'
import docs from './utils/api-docs'
import routes from './routes'

const env = yenv()
const PORT = env.PORT

const server = new Koa()

const options = {
  origin: '*',
}

server
  .use(accessLogger)
  .use(errorLogger)
  .use(helmet.contentSecurityPolicy(csp))
  .use(compress)
  .use(bodyParser())
  .use(notFavicon)
  .use(apiError)
  .use(docs)
<<<<<<< HEAD
  .use(cors())
=======
  .use(cors( options ))
>>>>>>> 92c4a47d49b434ba5e5a4d56f83fbf49fdca3363

routes.map(r => {
  server.use(r.routes())
  server.use(r.allowedMethods())
})

// server.use(routes.routes())
// server.use(routes.allowedMethods())

/* istanbul ignore if  */
if (env.NODE_ENV !== 'test') {
  server
    .listen(PORT, '127.0.0.1', () =>
      log.info(`Server listening on PORT: ${PORT}`)
    )
    .on('error', log.error)
}

export default server
