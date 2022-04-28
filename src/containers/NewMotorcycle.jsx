import axios from 'axios';
import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const NewMotorcycle = () => {

  const [data, setData] = useState({trademark:"",model:"",reference:"",price:"",image:""});
  const URL = "http://127.0.0.1:8000/api/moto/create";
  const navigate = useNavigate();

  const handleChange = ({target}) => {
    setData({
      ...data,
      [target.name]: target.value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(URL,data);
    if (response.data.status === 200) {
      Swal.fire(
        'Guardado!',
        `El registro ${response.data.data.reference} ha sido guardado exitosamente!`,
        'success'
      )
      navigate('/');
    }else{
      Swal.fire(
        'Error!',
        'Hubo un problema al crear el registro!',
        'error'
      )
    }
    
  }


  return (
    <Container>
      <h1 className="text-center">Nueva moto</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control type='text' name='reference' placeholder='Ingrese su referencia...'  value={data.reference} onChange={handleChange} required ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type='text' name='model' placeholder='Ingrese su model...'  value={data.model} onChange={handleChange} required ></Form.Control>
        </Form.Group>
        {/* <Form.Group className="mb-3">
          <Form.Control type='text' name='trademark' placeholder='Ingrese su trademark...'  value={data.trademark} onChange={handleChange} ></Form.Control>
        </Form.Group> */}
        <Form.Group className="mb-3">
          <Form.Control type='number' name='price' placeholder='Ingrese su price...'  value={data.price} onChange={handleChange} required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3"> 
          <Form.Control type='text' name='image' placeholder='Ingrese su image...'  value={data.image} onChange={handleChange} required></Form.Control>
        </Form.Group>
        {/* <Form.Group className="mb-3"> 
          <Form.Select onChange={handleChange} name='trademark' value={data.trademark}>
            <option value="">MARCA...</option>
            <option value="YAMAHA">YAMAHA</option>
            <option value="SUZUKI">SUZUKI</option>
            <option value="HONDA">HONDA</option>
          </Form.Select>
        </Form.Group> */}

        <Form.Group className="mb-3"> 
          <select 
            className='form-control' 
            onChange={handleChange} 
            name="trademark" required
          >
            <option value="">Seleccione una opcion...</option>
            <option value="YAMAHA">YAMAHA</option>
            <option value="SUZUKI">SUZUKI</option>
            <option value="HONDA">HONDA</option>
          </select>
        </Form.Group>
        <button className="btn btn-success" type="submit" >Guardar</button>
      </Form>
    </Container>
  )
}

export default NewMotorcycle;