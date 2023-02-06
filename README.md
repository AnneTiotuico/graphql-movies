# graphql-movies
- user visits the site
- the frontend displays a random set of movies
  - each movie card has:
    - title, duration, year, and movie poster

### todos
- set up card component

### next
- create the frontend container that displays many cards

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