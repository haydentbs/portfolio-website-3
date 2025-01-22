import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Footer from '@/components/footer';
import Background from '@/components/background';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Add Google Analytics to the Head */}
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LB0FBB0MEC"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LB0FBB0MEC');
            `,
          }}
        ></script>
      </Head>

      {/* Background and main content */}
      <Background />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}