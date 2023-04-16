import Head from 'next/head'
import { observer } from "mobx-react-lite";
import {useMobxStore} from './_app'

function IndexPage() {
  const store = useMobxStore()
  // @ts-ignore
  console.log(store.size)
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>MOBX & Table</title>
        <meta name="description" content="MOBX & Table" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"></link>
      </Head>
      <main>
        <section className='container'>
          <table role="grid">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {
      initialState: {
          list: [{}, {}]
      }
    }
  };
};

export default observer(IndexPage);