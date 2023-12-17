// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const [name, setName] = useState('John Doe');

  useEffect(() => {
    res.status(200).json({ name });
  }, [name]);
};

export default handler;
