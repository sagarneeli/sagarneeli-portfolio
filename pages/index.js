import Contact from '@/components/Contact';
import Head from 'next/head'
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import Experience from '@/components/Experience';
import { meta } from '@/data/config';

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      {/* The main container div has been removed to allow components to control their own max-width and padding. */}
      {/* Components will be direct children of the fragment. */}
      <Hero />
      {/* The space-y-10 div has been removed. Spacing is now handled by Hero's mb-20 and the py-X classes on subsequent components. */}
      <Projects />
      <Experience />
      <Stack />
      <Contact />
    </>
  );
}
