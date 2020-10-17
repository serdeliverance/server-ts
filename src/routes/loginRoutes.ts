import { Router, Request, Response } from 'express'

/**
 * Interface that assures that request has a body element which is typed correctly.
 *
 * Remember: Type Definition Files are provided by third parties and sometimes does not
 * reflect the correct types the library has (for example: TDF of Express asumes that
 * Request has a body attribute which is not correct)
 */
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

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

router.post('/login', (req: RequestWithBody, res: Response) => {
  let { email, password } = req.body

  if (email) {
    res.send(email.toUpperCase())
  } else {
    res.send('You must provide an email')
  }
})

export { router }
