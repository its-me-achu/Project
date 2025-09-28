import React, {useState} from 'react'
import Movies from '../components/Movies';
import Favourite from '../components/Favourite';
import Footer from '../components/Footer';

function Dashboard() {
  const [search, setSearch] = React.useState('');
   const  [favouriteMovies, setFavouriteMovies] = useState([]);
  const [isFavouriteOpen, setIsFavouriteOpen] = useState(false);

  const openFavourite= () => {
    setIsFavouriteOpen(true);
  }
  const closeFavourite = () => {
    setIsFavouriteOpen(false);
  } 
  const removeFromFovourite = (productId) => {
    setFavouriteMovies(favouriteMovies.filter ((items) => items.id !== productId))
  }
  return (
    <>
    <div>
  <input
        type="text"
        placeholder="Search for a movie..."
        className="border p-2 w-full mt-5 rounded-lg mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Movies  favouriteMovies={favouriteMovies} setFavouriteMovies={setFavouriteMovies}/>
      {
        isFavouriteOpen && (
          <Favourite favouriteMovies={favouriteMovies} closeFavourite={closeFavourite} removeFromFovourite={removeFromFovourite}/>
      )
    }
    </div>
    {/* <Footer  openFavourite ={openFavourite}/> */}
    </>
  )
}

export default Dashboard