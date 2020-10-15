import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
const notFound = () => {
return (
<Layout>
    <main className="error-page">
        <div className="error-container">
        <h1>Oj, Något gick fel</h1>
        <Link to="/" className="btn">
            Tillbaka Hem
        </Link>
        </div>
    </main>
</Layout>
)}
export default notFound
