# graphql-movies
- user visits the site
- the frontend displays a random set of movies
  - each movie card has:
    - title, duration, year, and movie poster

### todos
- created cards container and worked on css for each card

### next
- make each card clickable so when clicked a modal view opens

### TMDB response body example
```json
{
dates: {
maximum: "2023-01-28",
minimum: "2022-12-11"
},
page: 1,
results: [
{
adult: false,
backdrop_path: "/faXT8V80JRhnArTAeYXz0Eutpv9.jpg",
genre_ids: [
16,
28,
12,
35,
10751,
14
],
id: 315162,
original_language: "en",
original_title: "Puss in Boots: The Last Wish",
overview: "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
popularity: 7675.741,
poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
release_date: "2022-12-07",
title: "Puss in Boots: The Last Wish",
video: false,
vote_average: 8.6,
vote_count: 2900
},
{
adult: false,
backdrop_path: "/otOtC45BDzFW7nuxnWHMmnYsicK.jpg",
genre_ids: [
878,
27,
35
],
id: 536554,
original_language: "en",
original_title: "M3GAN",
overview: "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
popularity: 6177.288,
poster_path: "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
release_date: "2022-12-28",
title: "M3GAN",
video: false,
vote_average: 7.6,
vote_count: 978
}
```



/*
{
  "errors": [
    {
      "message": "Expected Iterable, but did not find one for field \"Query.moviesForHome\".",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "moviesForHome"
      ],
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR",
        "exception": {
          "message": "Expected Iterable, but did not find one for field \"Query.moviesForHome\".",
          "stacktrace": [
            "GraphQLError: Expected Iterable, but did not find one for field \"Query.moviesForHome\".",
            "    at completeListValue (/Users/annetiotuico/Desktop/graphql-movies/server/node_modules/graphql/execution/execute.js:668:11)",
            "    at completeValue (/Users/annetiotuico/Desktop/graphql-movies/server/node_modules/graphql/execution/execute.js:607:12)",
            "    at completeValue (/Users/annetiotuico/Desktop/graphql-movies/server/node_modules/graphql/execution/execute.js:584:23)",
            "    at /Users/annetiotuico/Desktop/graphql-movies/server/node_modules/graphql/execution/execute.js:486:9",
            "    at processTicksAndRejections (node:internal/process/task_queues:96:5)",
            "    at async Promise.all (index 0)",
            "    at async execute (/Users/annetiotuico/Desktop/graphql-movies/server/node_modules/apollo-server-core/dist/requestPipeline.js:205:20)",
            "    at async processGraphQLRequest (/Users/annetiotuico/Desktop/graphql-movies/server/node_modules/apollo-server-core/dist/requestPipeline.js:148:28)",
            "    at async processHTTPRequest (/Users/annetiotuico/Desktop/graphql-movies/server/node_modules/apollo-server-core/dist/runHttpQuery.js:221:30)"
          ]
        }
      }
    }
  ],
  "data": null
}
*/