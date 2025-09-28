import React from 'react'
import {Form, message, Modal, Row, Col, Input } from 'antd'
import api from '../api/axios'

function MovieModal({
   showMovieModal,
       setShowMovieModal ,
       selectedMovies ,
       setSelectedMovies,
       formType ,
       getData 
}){
 const onFinish = async (values)=>{
  try{
    let response = null;
    if(formType == "add"){
      response = await api.post("/movies/add-movies", values);
    message.success("Movie Added Successfully")
    }else{
      response = await api.post("/movies/update-movies",({
        ...values,
        movieId : selectedMovies._id
      }))
    }
    if(response.success){
      getData();
      message.success(response.message);
      setShowMovieModal(false);
    }else{
      message.success(response.message);
    }
  }catch(error){
        message.error(error.message);
  }
 };
  return (
   <>
   <Modal 
   title = {formType === "add" ? "ADD MOVIE" : "EDIT MOVIE"}
   open = {showMovieModal}
   onCancel={()=>{
    setShowMovieModal(false);
    setSelectedMovies(null);
   }}
   >
    <Form layout='vertical'
    onFinish={onFinish}
    initialValues={selectedMovies}>
      <Row gutter={16}>
        <Col span={24}>
      <Form.Item 
      label = "Movie Name"
      name= "title">
        {/* <input type="text" /> */}
        <Input/>
      </Form.Item>
      </Col>
      <Col span={24}>
      <Form.Item  label="PosterURL" name="poster">
{/* <input type="text" /> */}
<Input/>
      </Form.Item>
      </Col>
      </Row>
      <div className='flex justify-end gap-2'>
   <button type='button'
   onClick={()=>{
    setShowMovieModal(false);
    setSelectedMovies(null);
   }}
   >Cancel</button>
   <button type='submit'>Save</button>
      </div>
    </Form>
   </Modal>
   </>
  )
}

export default MovieModal