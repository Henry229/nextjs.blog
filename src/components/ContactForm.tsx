'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';
import { sendContactEmail } from '@/service/contact';

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form) //
      .then(() => {
        setBanner({ message: 'Mailing Success!', state: 'success' });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({ message: 'Mailing Failed!', state: 'error' });
      })
      .finally(() =>
        setTimeout(() => {
          setBanner(null);
        }, 3000)
      );
  };

  return (
    <section className='w-full max-w-md'>
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className='flex flex-col w-full gap-2 p-4 my-4 text-white rounded-xl bg-slate-700'
      >
        <label htmlFor='from' className='font-semibold'>
          Email
        </label>
        <input
          type='email'
          id='from'
          name='from'
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className='text-gray-700'
        />
        <label htmlFor='subject' className='font-semibold'>
          Subject
        </label>
        <input
          type='text'
          id='subject'
          name='subject'
          required
          value={form.subject}
          onChange={onChange}
          className='text-gray-700'
        />
        <label htmlFor='message' className='font-semibold'>
          Message
        </label>
        <textarea
          rows={10}
          id='message'
          name='message'
          required
          value={form.message}
          onChange={onChange}
          className='text-gray-700'
        />
        <button className='font-bold text-black bg-yellow-300 hover:bg-yellow-400'>
          Submit
        </button>
      </form>
    </section>
  );
}
