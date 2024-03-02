
export default function Home({ htmlContent }) {

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export async function getStaticProps() {
  const response = await fetch('https://editor.funnelliner.com/templates/238806/2183/index.html');
  const htmlContent = await response.text();
  return {
    props: {
      htmlContent,
    },
  };
}
