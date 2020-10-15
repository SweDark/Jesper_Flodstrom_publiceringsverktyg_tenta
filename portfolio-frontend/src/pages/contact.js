import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { ContactWrapper } from "../elements/ContactElements"
const contact = () => {
  return (
    <Layout>
      <SEO title="Kontakt" description="Kontaktsidan" />
      <ContactWrapper>
        <article>
          <h3>kontakta mig</h3>
          <form action="https://formspree.io/f/xnqojdap" method="POST">
            <div>
              <input
                type="text"
                placeholder="Namn"
                name="name"
              />
              <input
                type="email"
                placeholder="Epost"
                name="email"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Meddelande"
              ></textarea>
            </div>
            <button type="submit">
              Kontakta mig
            </button>
          </form>
        </article>
      </ContactWrapper>
    </Layout>
  )
}

export default contact
