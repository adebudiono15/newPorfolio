import Head from 'next/head';

export default function Layouts(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <main>{props.children}</main>
    </div>
  );
}
