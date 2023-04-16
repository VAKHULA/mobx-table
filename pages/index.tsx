import Head from 'next/head'
import { observer } from "mobx-react-lite";
import ReactPaginate from 'react-paginate';
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
      <main className="">
      <div className="grid">
      <aside className='p1'>
          <a href="#" aria-label="Example" 
            ><img src="img/maarten-deckers-T5nXYXCf50I-unsplash-1500x750.jpg" alt="Architecture"
          /></a>
          <p>
            <a href="#" >Donec sit amet</a><br />
            <small>Class aptent taciti sociosqu ad litora torquent per conubia nostra</small>
          </p>
          <a href="#" aria-label="Example" 
            ><img src="img/daniel-von-appen-tb4heMa-ZRo-unsplash-1500-750.jpg" alt="Architecture"
          /></a>


          <label htmlFor="date"
              >Date
              <input type="date" id="date" name="date" />
            </label>
            <label htmlFor="date"
              >Date
              <input type="date" id="date" name="date" />
            </label>

          <label htmlFor="select">Select</label>
          <select id="select" name="select" required>
            <option value="" selected>Select…</option>
            <option>…</option>
          </select>
     
            
              <label htmlFor="switch-2">
                <input type="checkbox" id="switch-2" name="switch-2" role="switch" />
                Switch
              </label>
              <details>
          <summary>Accordion 2</summary>
          <ul>
            <li>Vestibulum id elit quis massa interdum sodales.</li>
            <li>Nunc quis eros vel odio pretium tincidunt nec quis neque.</li>
            <li>Quisque sed eros non eros ornare elementum.</li>
            <li>Cras sed libero aliquet, porta dolor quis, dapibus ipsum.</li>
          </ul>
        </details>
        </aside>
        <section className='p1'>
          <figure>
          
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
          
          
          </figure>
          <ReactPaginate
            // previousLabel="previous"
            // nextLabel="next"
            // breakLabel="..."
            // breakClassName="page-item"
            // breakLinkClassName="page-link"
            pageCount={20}
            // pageRangeDisplayed={4}
            // marginPagesDisplayed={2}
            onPageChange={()=>{}}
            // containerClassName="pagination justify-content-center"
            // pageClassName="page-item"
            // pageLinkClassName="page-link"
            // previousClassName="page-item"
            // previousLinkClassName="page-link"
            // nextClassName="page-item"
            // nextLinkClassName="page-link"
            // activeClassName="active"
            // eslint-disable-next-line no-unused-vars
            hrefBuilder={(page, pageCount, selected) =>
              page >= 1 && page <= pageCount ? `/page/${page}` : '#'
            }
            // hrefAllControls
            forcePage={3}
            onClick={(clickEvent) => {
              console.log('onClick', clickEvent);
              // Return false to prevent standard page change,
              // return false; // --> Will do nothing.
              // return a number to choose the next page,
              // return 4; --> Will go to page 5 (index 4)
              // return nothing (undefined) to let standard behavior take place.
            }}
          />
          <progress id="progress-2"></progress>
        </section>


      </div>
    </main>
      <style jsx global>{`
      @media screen and (min-width: 992px) {
        main .grid {
          grid-column-gap: var(--spacing-company);
          grid-template-columns: 25% auto;
        }
      }
      .p1 {
        padding: 1rem;
      }
      [aria-label="Pagination"] {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        list-style: none;
      }
      [aria-label="Pagination"] li {
        list-style: none;
      }
      `}</style>
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