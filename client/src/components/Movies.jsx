import React, {useState, useEffect} from 'react'
//Like Productts.
function Movies({ favouriteMovies, setFavouriteMovies }) {
    const [movies, setMovies] = React.useState([]);

    useEffect(() =>{
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=20247eda')
.then (res => res.json())
.then (data => setMovies(data))
    }, []);
     const addtoFavourite =(figure) => {
      if(favouriteMovies.find ((item) => item.imdbiD === figure.imdbID)){
        alert("Movie Already added to your Favourite List");
      }else {
        setFavouriteMovies([...favouriteMovies, figure]);
      }
     }
  return (
    <>
      <div className='grid grid-cols-1 md-grid-cols-3 gap-4 p-4'> 
         <div className='border border-gary-500 rounded-sm shadow-lg bg-white p-5'>
            <img className='mx-auto h-50 mb-5' src={movies.Poster} alt='image' />
            <h2 className='text-lg font-semibold text-gray-700 font-serif'>{movies.Title}</h2>
            <p className='text-lg font-bold text-red-500 font-serif'>Rs.{movies.Language}</p>
            <button  onClick={() => addtoFavourite(movies)}
            className='bg-gray-500 text-black w-full py-2 my-2 rounded-full font-semibold font-serif hover:bg-yellow-400'>
                Add to Favourite</button>
         </div>
    </div>
    </>
  )
}

export default Movies