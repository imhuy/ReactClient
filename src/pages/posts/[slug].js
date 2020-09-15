import Header from '../../components/Header'
import { Container } from '@material-ui/core';
import { useRouter } from 'next/router'
import Head from 'next/head'
import React, { Component, useEffect, useState } from 'react';
import Icon from './icon';
import PostBody from '../../components/postBody'
const URL = 'https://nodes-erver.herokuapp.com'

function ProcessMetaKey(key) {
  var str = key;
  var res = str.split(" ");

}


function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <div key={number.toString()}>
      {number}
    </div>
  );
  return (
    <div >
      <p>{listItems}</p>
    </div>
  );
}

export default function AboutPage(props) {

  const { asPath } = useRouter()

  // console.log('propsx', props)

  const { tag, category, title, content } = props

  ProcessMetaKey(title);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Container maxWidth='md' style={{ backgroundColor: '#fff' }} >
        <div>
          <h1 style={{ fontFamily: 'Oswald', fontSize: "2.5em", fontWeight: 'bold' }} >{title}</h1>
          <div style={{ paddingLeft: 15, }}>
            {/* <Icon /> */}
            <div>
              <img style={{ borderRadius: 50, verticalAlign: 'center' }} alt="Kriss" className="icon" src="https://miro.medium.com/fit/c/96/96/1*RH-ihLouYINXUpRfL4Pc7g.jpeg" width="48" height="48" />
            </div>

            <div style={{}}>
              <span style={{}}> huydev </span>
              <span style={{ fontSize: 16 }}> Apr 4,2020</span>
            </div>
          </div>

          <div>
            {/* <p dangerouslySetInnerHTML={{ __html: content }} style={{ lineHeight: 2.5, textAlign: 'left', margin: 10, fontFamily: 'sans-serif' }} /> */}
            <PostBody content={content} />
          </div>
          <div>
            <NumberList numbers={tag} />
          </div>
        </div>
      </Container>
    </>
  )
}

async function getdata(query) {
  let id = query.postId;
  var rs = await fetch(`${URL}/getbyid/${id}`);

  var responjson = await rs.json()
  return responjson[0]
}

export async function getServerSideProps({ query }) {
  console.log(query)
  let data = await getdata(query);
  return { props: data }
}