import Header from '../../components/Header'
import { Container } from '@material-ui/core';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Icon from './icon'

function ProcessMetaKey(key) {
  var str = key;
  var res = str.split(" ");
  console.log('dev', res.toString())
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

  console.log('propsx', asPath)

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

export async function getServerSideProps() {
  var rs = await fetch(`http://localhost/getbyid/5f28323b8724bc53eca264b9`);
  var responjson = await rs.json()
  // console.log('rs1111', responjson)
  return { props: responjson[0] }
}