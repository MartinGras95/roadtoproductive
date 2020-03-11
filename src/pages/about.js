import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const aboutPage = () => {
    return(
        <Layout>
        <Head title="About" />

            <h1>About</h1>
            <p>Hey, my name is Martin and I'm a web development student in the beautiful city of Edinburgh.</p>
            <p>I'm pretty good at time management, studying and being productive in general, so I decided to make this blog. 
            </p>
            <p>My goal is to help people become more productive. 
            If you suffer from laziness, procrastination or just can't find the time to get stuff done, 
            you're in the right place.
            </p>
            <p>My blogs will mostly be made up of structured and concise tips with 
            references to my own experiences.</p>
            <p>Happy reading :)</p>
            <p><strong>Martin</strong></p>
        </Layout>
    )
}

export default aboutPage