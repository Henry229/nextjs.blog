import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const LINKS = [
  { icon: <AiFillGithub />, url: '' },
  { icon: <AiFillLinkedin />, url: '' },
  { icon: <AiFillYoutube />, url: '' },
];

export default function ContactPage() {
  return (
    <>
      <h2>Contact Me</h2>
      <p>chunhyungjoon@gmail.com</p>
      <div>
        {LINKS.map((link, index) => (
          <a key={index} href={link.url} target='_blank' rel='noreferrer'>
            {link.icon}
          </a>
        ))}
      </div>
    </>
  );
}
