import Koa from 'koa'
import cors from 'koa2-cors'
import helmet from 'koa-helmet'
import bodyParser from 'koa-bodyparser'
import yenv from 'yenv'
import log from 'fancy-log'

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

server
  .use(accessLogger)
  .use(errorLogger)
  .use(helmet.contentSecurityPolicy(csp))
  .use(compress)
  .use(bodyParser())
  .use(notFavicon)
  .use(apiError)
  .use(docs)
  .use(cors())

routes.map(r => {
  server.use(r.routes())
  server.use(r.allowedMethods())
})

/* istanbul ignore if  */
if (env.NODE_ENV !== 'test') {
  server
    .listen(PORT, '0.0.0.0', () =>
      log.info(`Server listening on PORT: ${PORT}`)
    )
    .on('error', log.error)
}

export default server
