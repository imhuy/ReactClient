import Header from '../components/Header'
import { Container } from '@material-ui/core';
import { useRouter } from 'next/router'
import Head from 'next/head';
// import '../styles/post.css'
// import '../styles/post.css'
import React, { Component, useEffect, useState } from 'react';

function ProcessMetaKey(key) {
    var str = key;
    var res = str.split(" ");

}


function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <
        div key = { number.toString() } > { number } <
        /div>
    );
    return ( <
        div >
        <
        p > { listItems } < /p> < /
        div >
    );
}

export default function AboutPage(props) {

    const { asPath } = useRouter()

    // console.log('propsx', props)

    const { tag, category, title, content } = props

    ProcessMetaKey(title);

    return ( <
        >
        <
        Head >
        <
        meta httpEquiv = "Content-Type"
        content = "text/html; charset=UTF-8" / >
        <
        meta httpEquiv = "X-UA-Compatible"
        content = "IE=edge" / >
        <
        title > What is Design Thinking ? An Introduction to the Design Process
        for Entrepreneurs and Developers < /title> <
        meta name = "viewport"
        content = "width=device-width, initial-scale=1.0" / >
        <
        link href = "../styles/style.css"
        rel = "stylesheet" / >
        <
        link rel = "stylesheet"
        type = "text/css"
        href = "../styles/screen.css" / >
        <
        /Head>

        <
        Header / >

        <
        div className = "site-wrapper" >
        <
        div id = "error-message" / >
        <
        main id = "site-main"
        className = "site-main outer" >
        <
        div className = "inner" >
        <
        article className = "post-full post tag-design-thinking tag-design-process tag-user-experience " >
        <
        header className = "post-full-header" >
        <
        section className = "post-full-meta" >
        <
        time className = "post-full-meta-date"
        dateTime = "2020-08-21" > 21 August 2020 < /time> <
        span className = "date-divider" > /</span >
        <
        a href = "https://www.freecodecamp.org/news/tag/design-thinking/" > #Design Thinking <
        /a> < /
        section > <
        h1 className = "post-full-title" > What is Design Thinking ? An Introduction to the Design Process
        for Entrepreneurs and Developers < /h1> < /
        header > <
        div className = "post-full-author-header" >
        <
        section className = "author-card" >
        <
        img className = "author-profile-image"
        src = "./b55135943cdbdc752e21a78364068535.png"
        alt = "Adam Naor" / >
        <
        section className = "author-card-content author-card-content-no-bio" >
        <
        h4 className = "author-card-name" > < a href = "https://www.freecodecamp.org/news/author/adam-naor/" > Adam Naor < /a></h
        4 >
        <
        /section> < /
        section > <
        /div> <
        section className = " post-full-content" >
        <
        div className = "post-content" >
        <
        p > There are some wonderfully well - designed products out there : a Herman Miller chair, an Apple laptop computer, a Tesla Model S, a cup of Starbucks coffee. < /p> <
        p > These products embody experiences that are greater than the product themselves. < /p> <
        p > These products have been designed to make our lives richer and in many respects better. <
        /p> <
        p > These products have something
        else incommon: design is central to how they behave and
        feel.These products also have a wonderful user experience and are supported by profitable business models. < /p> <
        p > In short, these products are well known to represent the best of the design process. < /p> <
        p > This begs the questions : what is the Design Process ? And how can entrepreneurs and developers start learning the Design Process ? < /p> <
        p > Having built and launched products like < a href = "https://wfhadviser.com/" > WFHAdviser.com < /a>
        I have a few relevant ideas. < /p> <
        p > I have also spoken with countless people about the topic, and these conversations have informed my thinking. < /p> <
        p > I now want to share these insights with you. < /p> <
        h2 id = "what-is-design-thinking" > What is Design Thinking ? < /h2> <
        p > Design thinking is a holistic way of applying critical thinking to solving design - related problems that matter to < em > people < /em>. Specifically, Design Thinking is a way to learn
        about, gain insight into, and deeply understand human beings. < /p> <
        p > An introduction to Design Thinking starts by placing the human experience– what people want, need, and value– at the center of your design thinking. < /p> <
        p > As opposed to optimizing
        for other metrics or stakeholders, like product speed, financial profits, or aesthetics, the design thinking process starts by prioritizing the primal needs of the human users. < /p> <
        p > What do people want ? What do they fear ? What do they most care about and < em > why < /em>?
            Design
            Thinking starts by attempting to frame answers to these questions. < /p> <
        h2 id = "how-can-you-place-humans-at-the-center-of-your-thinking" > How can you place humans at the center of your thinking ? < /h2> <
        p > I took a Design Thinking class in graduate school.The Professor asked us to“ get out of the building, ”leave the classroom, and go speak with people about issues they faced in
        their lives. < /p> <
        p > Specifically I was tasked with asking people about their relationship with the medical field. < /p> <
        p > Speaking to strangers can be challenging.But speaking with strangers about medicine– and when they last saw a doctor,
        for example– was downright anxiety - inducing. < /p> <
        p > Yet I knew
        if I wanted to improve my Design Thinking skills, I needed to go beyond my comfort zone. < /p> <
        p > You should embrace speaking with people.It will help you learn and improve your Design Thinking capabilities. < /p> <
        p > When you go and speak with people, pick a topic that you find interesting and worthwhile.Pay close attention to < em > who < /em> they are. Ask yourself:</p >
        <
        ol >
        <
        li > How did you find this person ? < /li> <
        li > Why did you talk to them ? < /li> <
        li > Was this person similar to you or different ? < /li> <
        li > In what ways did you originally guess that this person would be different from you ?
        (class, gender, race, ethnicity, age, legal status, and so on) ? < /li> < /
        ol > <
        p > Design Thinking starts with people.If you want to design
        for people you need to interact with people. < /p> <
        p > Ask probing questions and listen carefully.Listen
        for facts and listen
        for stories. < /p> <
        p > At the conclusion of your conversation, take time to reflect : < /p> <
        ol >
        <
        li > What was the most surprising thing about this person 's story?</li> <
        li > In what ways is this person turn out to be different from you ? < /li> <
        li > Does this person have values different from yours ? < /li> <
        li > If they have similar values, do they express these values in surprising ways ? < /li> <
        li > What questions did you ask that led to the most interesting insights ? < /li> <
        li > Did you notice anything surprising about the immediate environment where you talked to the person ? < /li> <
        li > Did the environment "prompt behavior"
        from you or from the person you talked with ?
        <
        /li> < /
        ol > <
        p > In < em > Change by Design < /em>, author Tim Brown writes at length about the importance of“
        empathy” in design thinking.Brown notes that empathy is a challenging word to define but a critical concept to building and designing products. < /p> <
        p > This is because empathy helps us understand others. < /p> <
        p > And
        if we are designing
        for people, we need to design
        for people that look, act, behave,
        and are fundamentally different from < em > ourselves < /em>.</p >
        <
        p > When learning more about the medical field, I spoke with a young man named Sam.At first I wanted to learn more about which online resources he used to find doctors. < /p> <
        p > But what he shared pivoted the conversation, and my subsequent understanding of his relationship to medical practitioners. < /p> <
        p > Sam talked about control and his lack of“ control” when it came time to paying medical bills.He repeatedly mentioned that he had to pay more out of pocket than he initially thought he would have to.He felt“ cheated.” < /p> <
        p > I didn’ t realize this at the time, but this feeling of being“ cheated” was an area worth exploring further. < /p> <
        p > Had I had a better rooting in Design Thinking I would have probed this domain further. <
        /p> <
        p > Specifically, I would have sought answers to the following : What about this“ cheated” feeling made Sam so irate ? Was it the feeling of powerlessness ? Was it a sense of financial injustice ? Or some combination of both ? Did Sam’ s loss of control make him feel threatened ? < /p> <
        p > A software tool that enables more transparent pricing disclosures is likely something that Sam would have benefited from.I only uncovered this insight by listening to what Sam said. < /p> <
        p > Yet I also missed other topics to question further.These were my mistakes.You need not repeat them. < /p> <
        p > When you are learning Design Thinking don’ t be afraid to ask probing questions as the conversation takes new and unexpected directions. < /p> <
        p > Go deep in the pursuit of truth. < /p> <
        p > The ability to learn through feeling– even
        if you don’ t have precise first - hand exposure to that thing– is what empathy is rooted in . < /p> <
        p > Using this feeling to inform decisions(products, design, and outcomes) is how empathy inspires Design Thinking. < /p> <
        h2 id = "placing-design-thinking-at-the-center-of-your-worldview" > Placing Design Thinking at the Center of Your Worldview < /h2> <
        p > Design Thinking is practiced and learned over time.An introduction to the Design Process can start in a physical classroom(as mine did), via < a href = "https://www.tafecourses.com.au/courses/it/" > informative online courses < /a>, or in conversations with people in your life. < /p > <
        p > When I first used the empathy framework to connect with Sam and others I spoke with, it was very challenging. < /p> <
        p > While it was not hard to remember everything he said, it was challenging to recount his body language and tone throughout the conversation when I got home and wanted to type up notes. < /p> <
        p > It was hard to map patterns among the different parts of the conversation. < /p> <
        p > As you begin your Design Thinking journey, you will likely struggle with recount as well.It is okay to struggle.Keep engaging, keep listening, and keep reflecting. < /p> <
        p > These skills will help you better understand what people care about. < /p> <
        p > These insights, in turn, will help you develop and ultimately build better solutions.By demonstrating a deep interest in the development and understanding of people, you can create outcomes that best help these people. < /p> <
        p > I like to think of Design Thinking as an evolved skill.You can practice, improve, and grow Design Thinking skills over the course of your life. < /p> <
        h2 id = "final-thoughts-on-design-thinking" > Final Thoughts on Design Thinking < /h2> <
        p > If you don’ t feel fully comfortable with this approach, you can always < a href = "https://www.growyourstaff.com/advantages-disadvantages-outsourcing/" > outsource aspects of work to experts < /a>.</p >
        <
        p > Through practice, however, you can improve. < /p> <
        p > And it also helps to establish a beneficial cycle.User - centric designs also help websites achieve their SEO goals too, after your product exists in the market. < /p> <
        p > According to the link building experts at < a href = "https://www.outreachpete.com/" >
        OutreachPete < /a>, employing design thinking makes for web content that viewers will
        be inclined to share and that other sites will be happy to link to. < /p> <
        p > When visitors know they 're at the heart of everything you do, search engines will notice
        and reward you accordingly. < /p> <
        p > By placing humans at the center of my inquiry, I discover new insights. < /p> <
        p > These insights helped me peel back assumptions and stale ways of thinking.By reframing patterns, I am able to incubate new ideas. < /p> <
        p > These benefits are readily available to you too. < /p> <
        p > You can stimulate creativity. < /p> <
        p > By thinking more creatively, you can ideate and generate new ideas and push the possibilities. < /p> <
        p > By pushing the boundaries, you can again discover new ways of thinking, and < a href = "https://thinkbiganalytics.com/data-visualization" > technologies like data visualization < /a> or VR can help you on your journey.</p >
        <
        p > This makes it easier to build because you have a clearer North Star. < /p> <
        p > This clarity can help deliver new products and solutions. < /p> <
        p > Delivering products leads to a new foundation of learning and discovery.And that is a worthy end goal. < /p> < /
        div > <
        hr / >
        <
        div className = "post-full-author-header" >
        <
        section className = "author-card" >
        <
        img className = "author-profile-image"
        src = "./b55135943cdbdc752e21a78364068535.png"
        alt = "Adam Naor" / >
        <
        section className = "author-card-content" >
        <
        h4 className = "author-card-name" > < a href = "https://www.freecodecamp.org/news/author/adam-naor/" > Adam Naor < /a> < /
        h4 > <
        p > Writer @ WFHAdviser.com, a site that helps remote workers thrive at home.Previously : Chrome & amp; Maps @ Google. < /p> < /
        section > <
        /section> < /
        div > <
        hr / >
        <
        /section> < /
        article > <
        /div> < /
        main > <
        /div>

        <
        />
    )
}

async function getdata(query) {
    let id = query.postId;
    var rs = await fetch(`http://localhost/getbyid/${id}`);

    var responjson = await rs.json()
    return responjson[0]
}

export async function getServerSideProps(context) {
    const { query } = context;
    // console.log('contextxxxx', context)
    console.log('queryzzxxx', query)

    let data = await getdata(query);
    return { props: data }
}