import Header from '../../components/Header'
import { Container } from '@material-ui/core';
import { useRouter } from 'next/router'
import Head from 'next/head'
import React, { Component, useEffect, useState } from 'react';
import Icon from './icon'

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
        <title>React Native · A framework for building native apps using React</title>
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
            <p dangerouslySetInnerHTML={{ __html: content }} style={{ lineHeight: 2.5, textAlign: 'left', margin: 10, fontFamily: 'sans-serif' }} />
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