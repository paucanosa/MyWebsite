import React from 'react';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <h1 style={{ fontFamily: "CeraPro, 'Avenir Next','Avenir',Helvetica,Ubuntu,'DejaVu Sans',Arial,sans-serif" }}>
        Hi! I'm building my personal website!
      </h1>
      <p style={{ fontFamily: "CeraPro, 'Avenir Next','Avenir',Helvetica,Ubuntu,'DejaVu Sans',Arial,sans-serif" }}>
        What do I like to do? Coding!.
      </p>
    </Layout>
  );
}

// ReactDOM.render(<Content />, document.getElementById('root'));
