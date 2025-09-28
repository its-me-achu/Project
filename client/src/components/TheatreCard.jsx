import React, {useState, useEffect}from 'react'
import api from '../api/axios'
import { Button, message, Table} from 'antd'
import TheatreModel from './TheatreModel'
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { use } from 'react';

function TheatreCard() {
const [theatres, setTheatres] = useState([]);
const [formType, setFormType] =useState("add");
const [showTheatreModal, setShowTheatreModal] = useState(null);
const [selectedTheatres, setSelectedTheatres]= useState(false);

const getData = async ()=>{
  try{
    const response = await api.get("/theatres/get-all-theatres");
          if (response.data && response.data.getTheatre) {
        setTheatres(response.data.getTheatre);
      }
  }catch(error){
      console.error("Not getting Theatres" , error);
  }};
  //Delete Theatres:
  const deleteTheatre = async(theatreId)=>{
    try{
      const response = await api.delete(`/theatres/delete-theatre/${theatreId}`);
      if(response){
        message.success("Theatre Deleted Successfully");
        getData();
      }else{
        message.error(response.message);
      }
    }catch(error){
console.error("Something went wrong while deleting thhe theatre");
    }};
// For Table:
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Seats",
      dataIndex: "seats",
      key: "seats"
    },{
      title: "Actions",
      dataIndex: "actions",
       render: (_, record) => (
         <div className="flex gap-2">
           <DeleteOutlined
             style={{ color: "red", cursor: "pointer" }}
             onClick={() => deleteTheatre(record._id)}
           />
           <EditOutlined
             style={{ color: "green", cursor: "pointer" }}
             onClick={() => {
               setSelectedTheatres(record);
               setFormType("edit");
               setShowTheatreModal(true);
             }}
           />
         </div>
       ),
    }];
    useEffect(()=>{
      getData();
    },[]);
  return (
    <>
    <div className='flex justify-end mb-1'>
      <Button className='p-1 mt-2'
      title='AddTheatre'
      onClick={()=>{
        setShowTheatreModal(true);
        setFormType("add");
        setSelectedTheatres(null);
      }}>Add Theatre</Button>
    </div>
    <Table  columns={columns} dataSource={theatres}/>
    {
      showTheatreModal && (
        <TheatreModel
        showTheatreModal={showTheatreModal}
        setShowTheatreModal={setShowTheatreModal}
        formType={formType}
        selectedTheatres={selectedTheatres}
        setSelectedTheatres={setSelectedTheatres}
        getData={getData}
        />
      )
    }
    </>
  )
}

export default TheatreCard