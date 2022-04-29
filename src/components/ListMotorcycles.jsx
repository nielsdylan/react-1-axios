import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardMotorcycle from './CardMotorcycle';
import { Container, Row, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
// import { Modal } from 'bootstrap';

    const ListMotorcycles = () => {
    const URL = "http://127.0.0.1:8000/api/moto";
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
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () =>{setShowModal(false)};
  const handleOpenModal = () =>{setShowModal(true)};

  //   hook para obtener los valores a editar
    const [dataModal, setDataModal] = useState({});
    //hook para obtener los nuevos cambios
    // const [dataForm, setDataForm] = useState({trademark:"",model:"",reference:"",price:"",image:""});

    const handleChangeModal = ({target}) =>{
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(`${URL}/update/${dataModal.motorcycle_id}`,dataModal);
        if (response.status === 200) {
            Swal.fire(
                'Guardado!',
                `El registro ha sido guardado exitosamente!`,
                'success'
            )
            handleCloseModal();
            setUpdateList(!updateList);
        }else{
            Swal.fire(
                'Error!',
                'Hubo un problema al actualizar el registro!',
                'error'
            )
        }
        console.log(response);
    }
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

                        setDataModal={setDataModal}
                    ></CardMotorcycle>
                ))
            }
        </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>ACTUALIZAR DATOS</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Referencia:</Form.Label>
                        <Form.Control type='text' name='reference' placeholder='Ingrese su Referencia...'  value={dataModal.reference} onChange={handleChangeModal} required ></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Modelo:</Form.Label>
                        <Form.Control type='text' name='model' placeholder='Ingrese su Modelo...'  value={dataModal.model} onChange={handleChangeModal} required ></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Precio::</Form.Label>
                        <Form.Control type='text' name='price' placeholder='Ingrese su Precio...'  value={dataModal.price} onChange={handleChangeModal} required ></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Imagen:</Form.Label>
                        <Form.Control type='text' name='image' placeholder='Ingrese su Imagen...'  value={dataModal.image} onChange={handleChangeModal} required ></Form.Control>
                    </Form.Group>

                    {/* <Form.Group className="mb-3">
                        <Form.Label>Referencia:</Form.Label>
                        <Form.Control type='text' name='trademark' placeholder='Ingrese su referencia...'  value={dataModal.trademark} onChange={handleChangeModal} required ></Form.Control>
                    </Form.Group> */}

                    <Form.Group className="mb-3"> 
                        <Form.Label>Marca:</Form.Label>
                        <select 
                            className='form-control' 
                            onChange={handleChangeModal} 
                            name="trademark" required
                        >
                            <option value={dataModal.trademark}>{dataModal.trademark}</option>
                            <option value="YAMAHA"  >YAMAHA</option>
                            <option value="SUZUKI">SUZUKI</option>
                            <option value="HONDA">HONDA</option>
                        </select>
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secundary" type='reset' onClick={handleCloseModal}>
                        Cerrar
                    </button>
                    <button className="btn btn-primary">Guardar</button>
                </Modal.Footer>
            </Form>
        </Modal>
    </Container>
  )
}

export default ListMotorcycles;