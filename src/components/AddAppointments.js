import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Alert
} from "reactstrap";

const styles = {
  backgroundColor: "#007bff",
  color: "#ffffff",
  cursor: "pointer"
};

class AddAppointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBody: false,
      patientName: "",
      patientAge: "",
      gender: "",
      aptDate: "",
      aptTime: "",
      aptNotes: "",
      formErrors: false
    };
  }
  toggleBody = () => {
    this.setState({
      showBody: !this.state.showBody
    });
  };
  save = e => {
    e.preventDefault();
    const {
      patientName,
      patientAge,
      gender,
      aptDate,
      aptTime,
      aptNotes
    } = this.state;
    if (
      patientName !== "" &&
      patientAge !== "" &&
      gender !== "" &&
      aptDate !== "" &&
      aptTime !== "" &&
      aptNotes !== ""
    ) {
      let apt = {
        id: Date.now(),
        patientName: this.state.patientName,
        patientAge: this.state.patientAge,
        gender: this.state.gender,
        aptDate: this.state.aptDate + " " + this.state.aptTime,
        aptNotes: this.state.aptNotes
      };
      let clear = {
        patientName: "",
        patientAge: "",
        gender: "",
        aptDate: "",
        aptTime: "",
        aptNotes: ""
      };
      this.setState({
        formErrors: false,
        showBody: false,
        ...clear
      });
      this.props.saveApt(apt);
    } else {
      this.setState({
        formErrors: true
      });
    }
  };
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    let displayBody = {
      display: this.state.showBody ? "block" : "none"
    };
    let errors = {
      display: this.state.formErrors ? "block" : "none"
    };
    return (
      <Card className="mt-4 mb-4 card-border" outline color="primary">
        <CardHeader style={styles} onClick={this.toggleBody}>
          <i className="fas fa-plus"></i> Añadir nueva cita
        </CardHeader>
        <CardBody style={displayBody} id="aptBody">
          <FormText color="muted" className="mb-1">
            <span className="text-danger">*</span>Campos requeridos
          </FormText>
          <Form onSubmit={this.save}>
            <FormGroup>
              <Label for="patientName">Paciente</Label>
              <Input
                type="text"
                id="patientName"
                placeholder="Nombre"
                value={this.state.patientName}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="patientAge">Edad</Label>
              <Input
                type="number"
                id="patientAge"
                placeholder="Edad"
                value={this.state.patientAge}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="gender">Género</Label>
              <Input
                type="select"
                id="gender"
                value={this.state.gender}
                onChange={this.handleChange}
              >
                <option>Seleccionar género</option>
                <option>Hombre</option>
                <option>Mujer</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="aptDate">Fecha</Label>
              <Input
                type="date"
                id="aptDate"
                value={this.state.aptDate}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="aptTime">Hora</Label>
              <Input
                type="time"
                id="aptTime"
                value={this.state.aptTime}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Problemas</Label>
              <Input
                type="textarea"
                id="aptNotes"
                placeholder="Añadir observaciones"
                value={this.state.aptNotes}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Alert color="danger" style={errors}>
              Por favor rellena todos los detalles
            </Alert>
            <Button type="submit" color="primary" block>
              Añadir cita
            </Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default AddAppointments;
