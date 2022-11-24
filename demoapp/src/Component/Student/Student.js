import React, { useState, useEffect } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
//import EditIcon from "@mui/icons-material/Edit";
import * as FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faPencil,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";

function Student() {
  const [data, setData] = useState([]);
  const getStudentDetails = () => {
    let apiURL = "https://localhost:7076/api/studentAPI";
    axios.get(apiURL, {}).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    getStudentDetails();
  }, []);

  const onGridReady = () => {};

  const columnDefs = [
    {
      headerName: "Student ID",
      field: "studentId",
      filter: true,
      cellRenderer: function (params) {
        return (
          // <span>
          //   <i class="fa-solid fa-pencil">edit {params.value} </i>
          // </span>

          <FontAwesomeIcon icon={faPencil} />
        );
      },
    },
    { headerName: "Name", field: "studentName", filter: true },
    { headerName: "Department", field: "deptId", filter: true },
  ];

  return (
    <div class="ag-theme-alpine" style={{ height: "100%", width: "100%" }}>
      <AgGridReact
        height={500}
        rowHeight={50}
        rowSelection="multiple" // simple attributes, not bound to any state or prop
        // these are bound props, so can use anything in React state or props
        columnDefs={columnDefs}
        rowData={data}
        onGridReady={onGridReady}
      />
    </div>
  );
}

export default Student;
