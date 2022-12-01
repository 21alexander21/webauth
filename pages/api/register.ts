import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    const {login, displayName} = req.body;
  res.status(200).json({ name: 'John Doe' })
}