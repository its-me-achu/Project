import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import { Button, message, Table} from 'antd'
import MovieModal from './MovieModal'
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";


function MovieCard() { 
const [movies, setMovies] = useState([]); 
const [formType, setFormType] =useState("add");
const [showMovieModal, setShowMovieModal] = useState(null);
const [selectedMovies, setSelectedMovies]= useState(false);


const getData = async ()=>{   
  try{
    const response = await api.get("/movies/get-all-movies");
          if (response.data && response.data.getMovie) {
        setMovies(response.data.getMovie);
      }

  }catch(error){
      console.error("Not getting Movies" , error);
  }};
  //Delete Movies:
  const deleteMovie = async(movieId)=>{
    try{
      const response = await api.delete(`/movies/delete-movies/${movieId}`);
      if(response){
        message.success("Movies Deleted Successfully");
        getData();
      }else{
        message.error(response.message);
      }
    }catch(error){
console.error("Something went wrong while deleting thhe movie");
    }
  };

  //For Table:
  const columns = [
    {
      title: "Poster",
      dataIndex: "poster",
      key: "poster",
      render: (test, record) =>{
        return (
          <img
          style={{ width: 100 }}
          src={record. poster}
          alt = "poster"
          className = ''
          />
        )}},
        {
          title:"Title",
          dataIndex: "title",
          key: "title"
        },
{
  title: "Action",
  key: "action",
  render: (_, record) => (
    <div className="flex gap-2">
      <DeleteOutlined
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => deleteMovie(record._id)}
      />
      <EditOutlined
        style={{ color: "green", cursor: "pointer" }}
        onClick={() => {
          setSelectedMovies(record);
          setFormType("edit");
          setShowMovieModal(true);
        }}
      />
    </div>
  ),
}
        ];
  useEffect(()=>{
    getData();
  }, []);
  return (
    <>
    <div className='flex justify-end mb-1'>
      <Button className='p-1 mt-2'
      title='Add Movie' 
      onClick={()=>{
        setShowMovieModal(true);
        setFormType("add");
        setSelectedMovies(null);
      }}>Add Movies</Button>
    </div>
    <Table columns={columns}  dataSource = {movies}/>
    {
      showMovieModal && <MovieModal
       showMovieModal ={showMovieModal}
       setShowMovieModal = {setShowMovieModal}
       selectedMovies ={ selectedMovies}
       setSelectedMovies={setSelectedMovies}
       formType = {formType}
       getData ={getData}  
       />
    }
    </>
  )
}
export default MovieCard