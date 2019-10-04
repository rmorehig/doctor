import React from "react";
import {
  InputGroup,
  InputGroupButtonDropdown,
  Input,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class SearchAppointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }
  handleSort = e => {
    this.props.sort(e.target.id, this.props.orderDir);
  };

  handleOrder = e => {
    this.props.sort(this.props.orderBy, e.target.id);
  };

  handleSearch = e => {
    this.props.search(e.target.value);
  };

  toggleDropDown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };
  render() {
    return (
      <InputGroup className="mb-3">
        <Input
          id="searchField"
          placeholder="Buscar citas"
          type="text"
          className="form-control"
          onChange={this.handleSearch}
        />
        <InputGroupButtonDropdown
          addonType="append"
          isOpen={this.state.dropdownOpen}
          toggle={this.toggleDropDown}
        >
          <DropdownToggle caret color="primary">
            Filtrar por
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={this.handleSort} id="patientName">
              Nombre{" "}
              {this.props.orderBy === "patientName" ? (
                <span className="fas fa-check"></span>
              ) : null}
            </DropdownItem>
            <DropdownItem onClick={this.handleSort} id="patientAge">
              Edad{" "}
              {this.props.orderBy === "patientAge" ? (
                <span className="fas fa-check"></span>
              ) : null}
            </DropdownItem>
            <DropdownItem onClick={this.handleSort} id="gender">
              Género{" "}
              {this.props.orderBy === "gender" ? (
                <span className="fas fa-check"></span>
              ) : null}
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={this.handleOrder} id="asc">
              Ascendente{" "}
              {this.props.orderDir === "asc" ? (
                <span className="fas fa-check"></span>
              ) : null}
            </DropdownItem>
            <DropdownItem onClick={this.handleOrder} id="desc">
              Descendente{" "}
              {this.props.orderDir === "dsc" ? (
                <span className="fas fa-check"></span>
              ) : null}
            </DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
    );
  }
}

export default SearchAppointments;
