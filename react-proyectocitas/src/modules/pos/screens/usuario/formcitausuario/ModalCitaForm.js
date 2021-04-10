import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody,
  ModalHeader, Row,
} from "reactstrap";
import PosContext from "../../../../../context/pos/posContext";
import { getHoras, getServicios, posCitasRegistradas} from "../../../../../services/servicios";
import Swal from "sweetalert2";



const formVacio = {
  nom_usu: "",
  apellido_usu : "",
  fecha_selec: "",
  hora_selec: 0,
  service_selec: "Selecione su servicio",
  mascota_selec: "",
  comen_usu: ""
}



const ModalCitaForm = () => {
  
  const { modal_cita, setModalCita, fecha_seleccionada, usu_nom, apellido_usu } = useContext(PosContext);
  const [formulario, setFormulario] = useState({...formVacio})
  const [horas, setHoras] = useState([])
  const [servicios, setServicios] = useState([])
  useEffect(()=>{
    getServicios().then((data)=>{
      setServicios(data)
    })
    getHoras().then((data)=>{
      setHoras(data)
    })
  },[])

  const handleChange = e =>{
    setFormulario({
      ...formulario,
      fecha_selec: fecha_seleccionada,
      nom_usu: usu_nom,
      apellido_usu: apellido_usu,
      [e.target.name]: e.target.value
    })
  }

  const submit = (e)=>{
    e.preventDefault();
    console.log("formulario enviado")
    posCitasRegistradas({...formulario}).then((data)=>{
      console.log(data)
      setFormulario(formVacio)
      setModalCita(false)
      Swal.fire(
        'Tu cita se registro correctamente',
        'Revisa tu tablero',
        'success'
      )
    })
  }

  return (
    <Modal isOpen={modal_cita} className="modal__cita">
      
      <ModalHeader className="titulo_modal">🐾 Agenda Tu Cita 🐾</ModalHeader>
      <ModalBody>
        <Form onSubmit={submit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="nom_usu">Nombre:</Label>
                <Input  value={usu_nom} disabled="disabled"
                  onChange={handleChange}
                  type="text"
                  name="nom_usu"
                  id="nom_usu"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="apellido_usu">Apellidos</Label>
                <Input disabled="disabled" value={apellido_usu}
                  onChange={handleChange}
                  type="text"
                  name="apellido_usu"
                  id="apellido_usu"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="fecha_seleccionada">📅 Fecha Seleccionada:</Label>
                <Input type="text" name="fecha_seleccionada" disabled="disabled" value={fecha_seleccionada} 
                  onChange={handleChange}
                 id="fecha_seleccionada"></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="hora_selec">⏰ Seleccione la Hora</Label>
                <Input type="select" name="hora_selec"  value={formulario.hora_selec}
                  onChange={handleChange}
                 id="hora_selec" >
                   <option selected="true" >--Selecciona tu Horario--</option>
                   {
                     horas.map((hora)=>{
                        return <option key={hora.id}>{hora.hora_init}:00  a {hora.hora_fini}:00 </option>
                     })
                   }
                 </Input>
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="service_select">📌 Seleccione Servicio:</Label>
                <Input type="select"  name="service_selec" id="service_selec" onChange={handleChange} value={formulario.service_selec}>
                   <option selected="true" >--Seleccione Servicio--</option>
                  {
                    servicios.map((servicio)=>{
                     return <option key={servicio.id}>{servicio.nombre_servicio}</option>
                    })
                  }
               </Input>
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="mascota_selec">😸 Mascota a Tratar 🐶</Label>
                <Input type="text" name="mascota_selec"  value={formulario.mascota_selec}
                  onChange={handleChange}
                 id="mascota_selec" ></Input>
              </FormGroup>
            </Col>
            <Col md={12}>
            <FormGroup>
        <Label for="comen_usu" >📃 Dejanos Alguna indicación 📃</Label>
        <Input type="textarea" name="comen_usu" id="coment_usu" onChange={handleChange} value={formulario.comen_usu}/>
      </FormGroup>
            </Col>
          </Row>
          <Button color="primary" type="submit" 
        >Reservar Cita</Button>{" "}
        <Button
          color="danger"
          onClick={() => {
            setModalCita(false);
          }}
        >
          Cancelar
        </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ModalCitaForm;
