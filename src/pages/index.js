import React, { Component, useEffect, useState } from 'react';
import { Button, Card, CardMedia, Container, Grid, Paper, Typography } from '@material-ui/core';
import Scroller from '../components/Scroller';
//  import InfiniteScroll from 'react-infinite-scroller';
import { fetchApi } from '../lib/api';
import Header from '../components/Header';
import styles from '../../styles';
import Link from 'next/link';
import Head from 'next/head'
export default function Home({ allPosts }) {


  const [isLoadmore, setLoadmore] = useState(true)
  const [data, setData] = useState(allPosts)

  useEffect(() => {

    // loadmore();
  }, ['iddd']);

  async function loadmore(page) {
    console.log('page', page  )
    var rs = await fetch(`http://localhost/post/${page}/6`);

    console.log('fetch424243')
    console.log(allPosts)

    console.log('isLoadmore32342423')
    console.log(isLoadmore)
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
          <div style={styles.heroContent}>
            <Container maxWidth="sm">

              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Album layout
                            </Typography>

              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
                            </Typography>

              <div style={styles.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="text" color="primary">
                      Main call to action  </Button>

                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action  </Button>

                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>

          <Container style={styles.cardGrid} >
            {/* End hero unit */}

            <Grid container spacing={6}>
              {data.map((item, i) =>

                // <Link as={`/posts/${item.slug}`} key={i} href={{ pathname: '/posts/[slug]', query: { id: item._id } }}>
                <Link as={`/posts/${item.slug}?postId=${item._id}`} key={i} href={{ pathname: '/posts/[slug]', query: { postId: item._id } }}>
                  <Grid item xs={12} sm={6} md={4}>

                    <Paper elevation={0} style={styles.card} >
                      <div >
                        <CardMedia
                          style={styles.cardMedia}
                          image={item.image}
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