import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { List } from "flowbite-react";

import { movieActions } from '../store/movieSlice';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movie.movies);

  useEffect(() => {
    async function func() {
      const response = await fetch('https://hoblist.com/api/movieList', {
        method: "POST",
        body: JSON.stringify({
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting"
        }),
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await response.json();
      console.log(data.result[1]);
      dispatch(movieActions.addMovies(data.result));
    }
    func();
  }, [])

  const calculateVotes = (item) => {
    let upVoted = 0;
    let downVoted = 0;
    if (item.upVoted) {
      upVoted = item.upVoted.length;
    }
    if (item.downVoted) {
      downVoted = item.downVoted.length;
    }
    return upVoted - downVoted;
  };

  return (
    <List unstyled>
      {movies.map(item => (
        <List.Item key={item._id}>
          <MovieCard
            votes={(calculateVotes.bind(null, item))()}
            image={item.poster} name={item.title}
            genre={item.genre}
            director={item.director[0] + item.director.slice(1).reduce((acc, curr) => acc + ', ' + curr, '')}
            starring={item.stars}
            runtime={item.runtime}
            language={item.language}
            date={item.releasedDate}
            views={item.pageViews}
            totalVotes={item.totalVoted}
          />
        </List.Item>
      ))}
    </List>
  )
}

export default Home;