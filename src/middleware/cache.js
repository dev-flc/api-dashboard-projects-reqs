import ExpeditiousEngine from 'expeditious-engine-redis'
import ExpressExpeditious from 'express-expeditious'

const { REDIS_HOST, REDIS_PORT } = process.env

const redisOptions = {
  host: REDIS_HOST,
  port: REDIS_PORT
}

export const CACHE = ExpressExpeditious({
  defaultTtl: '1 minute',
  engine: ExpeditiousEngine({ redis: redisOptions }),
  namespace: 'exampleCahe',
  statusCodeExpires: {
    404: '5 minutes',
    500: 0
  }
})
