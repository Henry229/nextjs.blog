import { sendEmail } from '@/service/email';
import * as yup from 'yup';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();
  if (!bodySchema.isValidSync(body)) {
    return new Response('Invalid format', { status: 400 });
  }
  // const { from, subject, message } = req.body;
  // 노드 메일러를 이용해서 메일을 전송하면 됨
  return sendEmail(body) //
    .then(
      () =>
        new Response(JSON.stringify({ message: 'Send email success' }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.error(error);
      return new Response(JSON.stringify({ message: 'Send email failed' }), {
        status: 500,
      });
    });
}
