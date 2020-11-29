const baseRouter = require('express').Router()

// test
baseRouter.get('/', async (_req: any, res: any) =>
  res.status(200).json({ msg: 'hello world.' })
)

module.exports = baseRouter
