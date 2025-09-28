import React from 'react'

function Footer({ openFavourite }) {
  return (
    <>
    <footer className='bg-pink-800 text-black p-4 flex justify-between items-center'
    openFavourite={openFavourite}
    >Footer</footer>
    </>
  )
}

export default Footer