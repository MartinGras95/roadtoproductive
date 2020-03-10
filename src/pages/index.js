import React from "react"

import Layout from "../components/layout"
import indexStyles from "./index.module.scss"
import Head from "../components/head"

const homeImage = require('../images/homeimage.jpg')

const IndexPage = () => {
    return(
        <Layout>
        <Head title="Home" />
            <h2 className={indexStyles.title}>“You may delay, but time will not.” <em className={indexStyles.quoteAuthor}>~Benjamin Franklin</em></h2>
            <img className={indexStyles.image} src={ homeImage } alt="Titi and martin"/>
        </Layout>
    )

}

export default IndexPage
