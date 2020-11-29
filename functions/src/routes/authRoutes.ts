const authRouter = require('express').Router()

// test
authRouter.get('/', async (_req: any, res: any) =>
  res.status(200).json({ msg: 'auth' })
)

module.exports = authRouter
