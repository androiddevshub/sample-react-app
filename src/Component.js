import React, {useEffect, useState} from "react";
import { Input, Button, Table, Space, Modal} from 'antd';
import axios from "axios";

function Component({name, email, phone}) {

  const [formData, setFormData] = useState({name: "", email: "", phone: "", password: ""});
  const [userList, setUserList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [userId, setUserId] = useState("");
  const [formAction, setFormAction] = useState("");

  useEffect(()=> {
    fetchUsers();
  }, [])

  const handleOpenModal = () => {
    setFormAction("add");
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  
  const inputHandleChange = (e) => {
    setFormData(prevState => ({...prevState, [e.target.name]: e.target.value}));
  }
  const handleSubmitClick = () => {
    if(formAction === "add"){
      saveUserData();
    }
    if(formAction === "edit"){
      editUserData();
    }
  }

  const editUser = (record) => {
    setFormAction("edit");
    setOpenModal(true);
    setUserId(record._id);
    setFormData({name: record.name, email: record.email, phone: record.phone});
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: "Actions",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=> editUser(record)}>Edit</a>
          <a onClick={()=> deleteUserData(record)}>Delete</a>
        </Space>
      )
    }
  ];

  const saveUserData = () => {
    axios.post("http://localhost:5000/users/signup", formData)
    .then(res=>{
      console.log("response", res.data);
      fetchUsers();
      setOpenModal(false);
      clearFormData();
    }).catch(err=>{
      console.log("error", err);
    })
  };

  const clearFormData = () => {
    setFormData({name: "", email: "", phone: "", password: ""});
  }

  const editUserData = () => {
    axios.put(`http://localhost:5000/users/${userId}`, formData)
    .then(res=>{
      console.log("response", res.data);
      fetchUsers();
      setOpenModal(false);
      clearFormData();
    }).catch(err=>{
      console.log("error", err);
    })
  }

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    console.log("users", response.data.data);
    setUserList(response.data.data)
  }

  const deleteUserData = (record) => {
    const value = window.confirm("Are you sure, you want to delete the record?");
    if(value){
      axios.delete(`http://localhost:5000/users/${record._id}`)
      .then(res=> {
        console.log(res.data);
        fetchUsers();
      }).catch(err=>{
        console.log(err);
      })
    }
  }

  return (
    <div>
      <div>
        <Button style={{margin: "50px"}} type="primary" onClick={handleOpenModal}>Add User</Button>
        <Table size="small" dataSource={userList} columns={columns}/>
      </div>
      <Modal 
        title="Add user"
        open={openModal}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        footer={[
          <Button key="back" onClick={handleCloseModal}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmitClick}>
            Submit
          </Button>,
        ]}
      >
        <div>
          <br/> 
          <Input style={{width: "300px"}} onChange={(e)=>inputHandleChange(e)} name="name" value={formData.name} placeholder="Please enter your name" />
          <br/> <br/> 
          <Input style={{width: "300px"}} onChange={inputHandleChange} name="email" value={formData.email} placeholder="Please enter your email" /> 
          <br/> <br/> 
          <Input style={{width: "300px"}} onChange={inputHandleChange} name="phone" value={formData.phone} placeholder="Please enter your phone" /> 
          <br/> <br/> 
          {
            formAction === "add" && (
              <Input style={{width: "300px"}} onChange={inputHandleChange} type="password" name="password" value={formData.password} placeholder="Please enter your password" />
            )
          }
          <br/> <br/> 
        </div>
      </Modal>
    </div>
  )
}

export default Component;

