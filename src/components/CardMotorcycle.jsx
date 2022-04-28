import axios from 'axios';
import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Swal from 'sweetalert2';
import "./styles/styles.css";

const CardMotorcycle = ({motorcycle, setUpdateList, updateList}) => {
  const URL = "http://127.0.0.1:8000/api/moto/delete";

  const handleDelete = async () =>{
    // const response = await axios.delete(URL+"/"+motorcycle.motorcycle_id); tan bienn funciona
    Swal.fire({
      title: 'Eliminar?',
      text: "Estas seguro de eliminar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${URL}/${motorcycle.motorcycle_id}`).then((response)=>{
          if (response.data.status === 200) {
            Swal.fire(
              'Eliminado!',
              `Se elimino el registro!`,
              'success'
            )
            setUpdateList(!updateList);
          }else{
            Swal.fire(
              'Error!',
              'Hubo un problema al crear el registro!',
              'error'
            )
          }
        })
      }
    })
  }

  const handleEdit = () => {
    console.log('editar');
  }

  return (
    <div className='col-4 mb-3'>
        <Card>
          <Card.Title className="text-center">{motorcycle.reference}</Card.Title>
          <img src={motorcycle.image} alt={motorcycle.reference} className="card-img-top image-card" />
          <Card.Body>
            <ListGroup>
              <ListGroupItem> <strong>MODELO:</strong> {motorcycle.model}</ListGroupItem>
              <ListGroupItem> <strong>MARCA:</strong> {motorcycle.trademark}</ListGroupItem>
              <ListGroupItem> <strong>PRECIO:</strong> {motorcycle.price}</ListGroupItem>
            </ListGroup>
            <button className='btn btn-danger me-2' onClick={handleDelete}>ELIMINAR</button>
            <button className='btn btn-primary me-2'onClick={handleEdit} >EDITAR</button>
          </Card.Body>
        </Card>
    </div>
  )
}

export default CardMotorcycle;
