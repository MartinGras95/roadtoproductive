import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const aboutPage = () => {
    return(
        <Layout>
        <Head title="About" />

            <h1>About</h1>
            <p>Hey, the name's Martin and I'm a web development student at Napier University, Edinburgh.</p>
            <p>I'm really good at time management, studying and being productive in general so I decided to create a blog. 
            </p>
            <p>My goal is to help people who struggle with laziness and obsessive procrastination (which I was a victim of in the past).
                As a secondary goal I also really want to get better at content-writing! As a future web developer it seems like a good 
                skill to have so hey, why not be productive and learn something in the process! that's your first tip, you're welcome ;)
            </p>
            <p><strong>Laters!</strong></p>
        </Layout>
    )
}

export default aboutPage