import Hero from '@/components/Hero';

const TITLE_CLASS = 'my-2 text-2xl font-bold text-gray-800';

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className='p-8 m-8 text-center bg-gray-100 shadow-lg'>
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          A full-stack developer who love improvement
          <br />
          Creating a wep application with people and design
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          Google (-Now) <br />
          Macebook(-2019) <br />
          Sansung Electronics(-2015) <br />
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Vue, Node, Nextjs <br />
          VS Code, GitHub, MongDB, MS-SQL, PostgreSQL
        </p>
      </section>
    </>
  );
}
