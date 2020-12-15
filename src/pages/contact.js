import React from 'react';
import Layout from '../components/layout';
import { ContactTitle, SitesWrapper, EmailSentence, EmailTitle } from '../styles/contactStyle';
import SiteBox from '../components/contact/siteBox';
import MailBox from '../components/contact/mailBox';
import contactData from '../data/contact';
export default function Contact() {
  return (
    <Layout>
      <ContactTitle>You can find me in</ContactTitle>
      <SitesWrapper>
        {contactData.map((item) => (
          <SiteBox info={item} />
        ))}
      </SitesWrapper>
      <EmailSentence>
        or send me an <EmailTitle href="mailto:canosapau@gmail.com">email</EmailTitle>
      </EmailSentence>
    </Layout>
  );
}
