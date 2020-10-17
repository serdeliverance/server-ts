import { Router, Request, Response } from 'express'

let router = Router()

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `)
})

router.post('/login', (req: Request, res: Response) => {
  let { email, password } = req.body

  res.send(email + password)
})

export { router }
