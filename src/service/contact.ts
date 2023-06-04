import { EmailData } from './email';

export async function sendContactEmail(email: EmailData) {
  //우리 API Route에 이메일 전송을 위한 요청을 보냄(fetch)
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'failed to connect to server 😵‍💫');
  }
  return data;
}
