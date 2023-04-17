// https://github.com/garethbjohnson/gutendex

// https://gutendex.com/books/?page=2&languages=fr

// {
//     "count": <number>,
//     "next": <string or null>,
//     "previous": <string or null>,
//     "results": <array of Books>
//   }
// author_year_start and author_year_end
// copyright bool
// search - http://gutendex.com/books/?search=dickens%20great
// sort - ascending / descending / popular
// topic - http://gutendex.com/books/?topic=children




export const getBooks = async (params) => {
      try {
        const response = await fetch(
            `https://gutendex.com/books/?${new URLSearchParams({
                params
            })}`
          );
          const responseJson = await response.json();
          return responseJson
      } catch (error) {

      }
}
