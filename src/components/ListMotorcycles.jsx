import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardMotorcycle from './CardMotorcycle';
import { Container, Row, Modal } from 'react-bootstrap';
// import { Modal } from 'bootstrap';

const ListMotorcycles = () => {
  const URL = "http://127.0.0.1:8000/api/motos";
  const [list, setList] = useState([]);
  const [updateList, setUpdateList] = useState(false);

  const getData = async () => {
    const response = axios.get(URL);
    return response;
  }
  
  useEffect(()=>{
    getData().then((response)=>{
      setList(response.data);
    })
  },[updateList])
  // para el modal
  const [showModal, setShowModal] = useState(true);


  const handleCloseModal = () =>{setShowModal(false)};
  const handleOpenModal = () =>{setShowModal(true)};

  return (
    
    <Container className='mb-5'>
      <Row>
        {
          list.map((motorcycle,index)=>(
            <CardMotorcycle 
              key={index} 
              motorcycle={motorcycle} 
              setUpdateList={setUpdateList} 
              updateList={updateList}

              handleCloseModal={handleCloseModal}
              handleOpenModal={handleOpenModal}
            ></CardMotorcycle>
          ))
        }
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>ACTUALIZAR DATOS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          hjoas
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secundary" onClick={handleCloseModal}>
            Cerrar
          </button>
          <button className="btn btn-primary">Guardar</button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default ListMotorcycles;