import React from 'react'
import api from '../api/axios'
import { Form, Input, message, Modal, Row, Col} from 'antd'

function TheatreModel({
    showTheatreModal,
    setShowTheatreModal,
    selectedTheatres,
    setSelectedTheatres,
    formType,
    getData
}){
  const onFinish = async(values)=>{
    try{
      let response = null;
        if(formType == "add"){
   response = await api.post("/theatres/add-theatre", values);
    message.success("Theatre Added Successfully")
        }else{
       response = await api.post("/theatres/update-theatre",({
                ...values,
                theatreId : selectedTheatres._id
            }))
        }
        if(response.success){
            getData();
            message.success(response.message);
            setShowTheatreModal(false);
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
    title = {formType === "add" ? "ADD THEATRE" : "EDIT THEATRE"}
    open = {showTheatreModal}
    onCancel={()=>{
        setShowTheatreModal(false);
        setSelectedTheatres(null);
    }}
    >
  <Form layout='vertical'
        onFinish={onFinish}
        initialValues={selectedTheatres}>
  <Row gutter={16}>
 <Col span={24}>
   <Form.Item
  label = "Theatre Name"
 name = "name">
  <Input/>
 </Form.Item>
 </Col>
  <Col span={24}>
   <Form.Item label= "Number of Seats" name="seats">
    <Input/>
   </Form.Item>
   </Col>
            </Row>
   <div className='flex justify-end gap-2'>
   <button type='button'
   onClick={()=>{
    setShowTheatreModal(false);
    setSelectedTheatres(null);
   }}
   >Cancel</button>
   <button type='submit'>Save</button>
      </div>
        </Form>
       </Modal>
  </>
  )
}

export default TheatreModel