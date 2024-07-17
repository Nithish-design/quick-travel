import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import { MdAutoDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";


function Busadmin() {
  let [input, setInput] = useState([]);
  let [edit,setEdit] = useState(false)
  let [btn,setBtn] = useState("save")
  let [nen, setNen] = useState({
    busname:"",
    travellingtime: "",
    bustype: "",
    source: "",
    to: "",
    departuretime: "",
    arrivaltime: "",
    price: "",
    noofseats: ""
  });

  useEffect(() => {
    axios.get("http://localhost:5000/bus/getallbus").then(res => {
      setInput(res.data);
    });
  }, []);

  let column = [
    {
      name: "BusName",
      selector: row => row.busname,
      sortable: true,
    },
    {
      name: "Travellingtime",
      selector: row => row.travellingtime,
      sortable: true,
    },
    {
      name: "Bustype ",
      selector: row => row.bustype,
      sortable: true,
    },
    {
      name: "From",
      selector: row => row.source,
      sortable: true,
    },
    {
      name: "To",
      selector: row => row.to,
      sortable: true,
    },
    {
      name: "Departure Time",
      selector: row => row.departuretime,
      sortable: true,
    },
    {
      name: "Arrival Time",
      selector: row => row.arrivaltime,
      sortable: true,
    },
    {
      name: "Price",
      selector: row => row.price,
      sortable: true,
    },
    {
      name: "Noofseats",
      selector: row => row.noofseats,
      sortable: true,
    },

    
    {
      name:"Action",
      cell:row=>(
        <div>
           <Button onClick={()=>handleEdit(row.employeeId)} variant="primary"><FiEdit /></Button>&nbsp;&nbsp;&nbsp;
<Button onClick={()=>handleDelete(row.employeeId)} variant="danger"><MdAutoDelete /></Button>

        </div>

      )

    }
  ];

  
  let handleEdit = (id) => {
    let result = input.filter(item => item.Id === id); 
    if (result.length > 0) {
      let item = result[0];
      setNen({
        busname: item.busname, 
        travellingtime: item.travellingtime,
        bustype: item.bustype,
        source: item.source,
        to: item.to,
        departuretime: item.departuretime,
        arrivaltime: item.arrivaltime,
        price: item.price,
        noofseats: item.noofseats,
        createdby:1
      });
      setBtn("update");
      setEdit(true);
    }
  }
  

  let handleDelete=()=>{


  }

  let handleUpdate=()=>{

    axios.post("http://localhost:5000/bus/createbuspost", {
      busname:nen.busname,
      travellingtime: nen.travellingtime,
      bustype: nen.bustype,
      source: nen.source,
      to: nen.to,
      departuretime: nen.departuretime,
      arrivaltime: nen.arrivaltime,
      price: nen.price,
      noofseats: nen.noofseats,
      Id: 0
    }).then(() => {
      Swal.fire({
        title: "Good job!",
        text: "Bus details saved successfully!",
        icon: "success"
      });
    })
    setBtn("update");
    setEdit(true);

  }

  let handleChange = (e) => {
    setNen({ ...nen, [e.target.name]: e.target.value });
  }

  let handleClick = (e) => {

   if(edit) {
    handleUpdate()
   }
   else{
    handleSave()
   }
  }
   let handleSave=(e)=>{

   

    e.preventDefault();
    axios.post("http://localhost:5000/bus/createbuspost", {
      busname:nen.busname,
      travellingtime: nen.travellingtime,
      bustype: nen.bustype,
      source: nen.source,
      to: nen.to,
      departuretime: nen.departuretime,
      arrivaltime: nen.arrivaltime,
      price: nen.price,
      noofseats: nen.noofseats,
      Id: 0
    }).then(() => {
      Swal.fire({
        title: "Good job!",
        text: "Bus details saved successfully!",
        icon: "success"
      });
    })
      
   }

  let customStyles = {
    headRow: {
      style: { backgroundColor: "red" }
    },
    headCells: {
      style: { color: "white" }
    },
    cells: {
      style: { color: "blue" }
    }
  }

  return (
    <div>
      <Row>
        <Col xs={12} md={6} xl={4}></Col>
        <Col xs={12} md={6} xl={3}>
          <h3>Bus Master</h3>
          <Form>
          <Form.Group className="mb-3" controlId="formBusName">
              <Form.Control type="text" name='busname' value={nen.busname} placeholder="Enter the Busname" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTravellingTime">
              <Form.Control type="text" name='travellingtime' value={nen.travellingtime} placeholder="Enter the travelling time" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBusType">
              <Form.Control type="text" name='bustype' value={nen.bustype} placeholder="Enter the Bustype" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSource">
              <Form.Control type="text" name='source' value={nen.source} placeholder="Enter the From place" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTo">
              <Form.Control type="text" name='to' value={nen.to} placeholder=" Enter the To place" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDepartureTime">
              <Form.Control type="text" name='departuretime' value={nen.departuretime} placeholder="Enter the Departure time" onChange={handleChange} />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formArrivalTime">
              <Form.Control type="text" name='arrivaltime' value={nen.arrivaltime} placeholder="Enter the Arrival time" onChange={handleChange} />
            </Form.Group>

           

            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Control type="number" name='price' value={nen.price} placeholder="Enter the Price" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNoOfSeats">
              <Form.Control type="number" name='noofseats' value={nen.noofseats} placeholder="Enter the no of seats" onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleClick}>
              {btn}
            </Button>
          </Form>
        </Col>
      </Row>

      <br />
      <DataTable
        data={input}
        columns={column}
        customStyles={customStyles}
        pagination
        paginationPerPage={8}
        selectableRows
        selectableRowsHighlight
        highlightOnHover
      />
    </div>
  );
}

export default Busadmin;
