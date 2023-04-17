import Head from 'next/head'
import {useState} from 'react'
import { observer } from "mobx-react-lite"
// @ts-ignore
import Paginator from 'react-hooks-paginator'
import {useMobxStore} from './_app'
import filters from '../filters.json'
import { getBooks } from '../api'

function IndexPage({results, count}) {
  const store = useMobxStore()
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

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
        <div className="grid">
          <aside className='p1'>

          <label htmlFor="topics">topics</label>
              <select id="topics" name="topics">
                <option value="all">All</option>
                  {filters.topics.map((language) => (
                    <option value={language}>{language}</option>
                  ))}
              </select>

            <label htmlFor="language">Language</label>
            <select id="language" name="language">
              <option value="all">All</option>
              {filters.languages.map((language) => (
                <option value={language}>{language}</option>
              ))}
            </select>

            <label htmlFor="copyright">
              <input type="checkbox" id="copyright" name="copyright" role="switch" />
              copyright
            </label>

            <br/>

            <details>
              <summary>Date</summary>
              <label htmlFor="date">
              author_year_start
              <input type="date" id="date" name="date" />
            </label>

            <label htmlFor="date">
              author_year_end
              <input type="date" id="date" name="date" />
            </label>
            </details>

            

          </aside>
          <section className='p1'>
            <figure>
              <table role="grid">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">title</th>
                    <th scope="col">authors</th>
                    <th scope="col">bookshelves</th>
                    <th scope="col">subjects</th>
                    <th scope="col">lang</th>
                    <th scope="col">type</th>
                    <th scope="col">link</th>
                  </tr>
                </thead>
                <tbody>
                {results.map((book) => (
                  <tr>
                  <th scope="row">{book.id}</th>
                  <td>{book.title}</td>
                  <td>{book.authors.map(({name})=>(<span>{name},</span>))}</td>
                  <td>
                    <details>
                      <summary>bookshelves ({book.bookshelves.length})</summary>
                      <div>{book.bookshelves.map((bookshelve)=>(<span>{bookshelve}, </span>))}</div>
                    </details>
                  </td>
                  <td>
                    <details>
                      <summary>subjects ({book.subjects.length})</summary>
                      <div>{book.subjects.map((subject)=>(<span>{subject}, </span>))}</div>
                    </details>
                  </td>
                  <td>{book.languages.map((language)=>(<span>{language}, </span>))}</td>
                  <td>{book.media_type}</td>
                  <td>
                    <details>
                      <summary>download ({book.download_count})</summary>
                      <div>{Object.keys(book.formats).map((format) => (
                        <><a href={book.formats[format]}>{format}</a><br/></>
                      ))}</div>
                    </details>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </figure>
            <Paginator
              totalRecords={count}
              pageLimit={10}
              pageNeighbours={1}
              setOffset={setOffset}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pagePrevText='prev'
              pageNextText='next'
            />
            <progress id="progress-2"></progress>
          </section>
        </div>
      </main>
      <style jsx global>{`
        @media screen and (min-width: 992px) {
          main .grid {
            grid-column-gap: var(--spacing-company);
            grid-template-columns: 15% auto;
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
        .react-hooks-paginator {
          gap: 1rem;
        }
        .react-hooks-paginator .page-item {
          flex-grow: 1;
        }
        .hooks-paginator .page-item.active .page-link {
          background-color: #fff;
          border-color: #fff;
          color: #3895d3;
        }
        details {
          padding: 0;
          margin: 0;
        }
        summary {
          position: relative;
          white-space: nowrap;
        }
        summary:after {
          position: absolute;
          right: -1rem;
          top: 0;
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  const { count, results } = await getBooks({page: 1})
  console.log(results[0].authors)
  return {
    props: {
      initialState: {
          list: [{}, {}]
      },
      count, results
    }
  };
};

export default observer(IndexPage);