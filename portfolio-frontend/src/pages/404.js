import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { ErrorPage} from "../elements/ErrorElements"
import { Button} from "../components/Button"
const Error = () => {
return (
<Layout>
    <ErrorPage>
        <div>
            <h1>Oj, Något gick fel</h1>
            <Button href={"/"}>Tillbaka Hem</Button>
        </div>
    </ErrorPage>
</Layout>
)}
export default Error
