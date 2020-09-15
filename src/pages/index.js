import React, { Component, useEffect, useState } from 'react';
import { Button, Card, CardMedia, Container, Grid, Paper, Typography } from '@material-ui/core';
import Scroller from '../components/Scroller';
//  import InfiniteScroll from 'react-infinite-scroller';
import { fetchApi } from '../lib/api';
import Header from '../components/Header';
import styles from '../../styles';
import Link from 'next/link';
import Head from 'next/head'
const URL = 'https://nodes-erver.herokuapp.com'
export default function Home({ allPosts }) {


  const [isLoadmore, setLoadmore] = useState(true)
  const [data, setData] = useState(allPosts)


  async function loadmore(page) {
    console.log('page', page)
    var rs = await fetch(`${URL}/post/${page}/6`);
    var itemResponse = await rs.json();
    if (itemResponse === null || itemResponse.length === 0) {
      setLoadmore(false)
    }
    setData(data.concat(itemResponse))
    // this.setState({ data: this.state.data.concat(itemResponse) })
  }


  return (
    <React.Fragment>
      <Head>
        <title>React Native · A framework for building native apps using React</title>
        <meta name="description" content={'description' || ''} />
      </Head>
      <main style={styles.main}>
        <div style={styles.content} >
          <Header />
          <Container style={styles.cardGrid} >
            {/* End hero unit */}

            <Grid container spacing={6}>
              {data.map((item, i) =>
                <Link key={item._id} as={`/posts/${item.slug}?postId=${item._id}`} href={{ pathname: `/posts/_id`, query: { postId: item._id } }}>
                  <Grid item xs={12} sm={6} md={4}>

                    <Paper elevation={0} style={styles.card} >
                      <div >
                        <CardMedia
                          style={styles.cardMedia}
                          // image={item.image}
                          title={item.title}
                        />
                      </div>
                      <div style={styles.cardContent}>

                        <p style={{ fontFamily: 'Oswald', fontSize: "1.5em", fontWeight: 'bold', }} >
                          {item.title} </p>
                        <Typography style={{ color: '#5f6368' }} > {item.description}  </Typography>
                      </div>
                    </Paper>

                  </Grid>
                </Link>
              )}
            </Grid>

            <Grid container spacing={6}>

              <Scroller
                pageStart={0}
                loadMore={loadmore.bind(this)}
                hasMore={isLoadmore}
                loader={<div className="loader" key={0}>Loading ...</div>}  >
              </Scroller>

            </Grid>

          </Container>
        </div>
      </main>
    </React.Fragment >
  )
}


export async function getServerSideProps() {
  const allPosts = await fetchApi()
  return {
    props: { allPosts, },
  }
}