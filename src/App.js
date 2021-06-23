import React from "react";

import {
  Download16,
  AddAlt16,
  TrashCan16,
  PauseOutlineFilled16,
  CheckmarkFilled16,
  Search16,
  OverflowMenuHorizontal16,
  CloseFilled16,
} from "@carbon/icons-react";

import { DataTable } from "carbon-components-react";
import { TextInput } from "carbon-components-react";
import { RadioButtonGroup, RadioButton } from "carbon-components-react";
import { ModalWrapper } from "carbon-components-react";
import { Checkbox } from "carbon-components-react";

import "./App.css";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} = DataTable;

const headerData = [
  {
    header: "Name",
    key: "name",
  },
  {
    header: "UserName",
    key: "username",
  },
  {
    header: "SuperUser",
    key: "superuser",
  },
  {
    header: "Staff",
    key: "staff",
  },
  {
    header: "Active",
    key: "active",
  },
];

const rowData = [
  {
    id: "a",
    name: "Jason Nolen",
    username: "json",
    superuser: <CheckmarkFilled16 fill="#719d0a" />,
    staff: <CloseFilled16 fill="#8f9ba4" />,
    active: <CheckmarkFilled16 fill="#719d0a" />,
  },
  {
    id: "b",
    name: "John Smith",
    username: "john",
    superuser: <CloseFilled16 fill="#8f9ba4" />,
    staff: <CloseFilled16 fill="#8f9ba4" />,
    active: <CheckmarkFilled16 fill="#719d0a" />,
  },
  {
    id: "c",
    name: "Scott Adams",
    username: "scott",
    superuser: <CloseFilled16 fill="#8f9ba4" />,
    staff: <CheckmarkFilled16 fill="#719d0a" />,
    active: <CloseFilled16 fill="#8f9ba4" />,
  },
  {
    id: "d",
    name: "Megan Mccloud",
    username: "Megan",
    superuser: <CheckmarkFilled16 fill="#719d0a" />,
    staff: <CloseFilled16 fill="#8f9ba4" />,
    active: <CloseFilled16 fill="#8f9ba4" />,
  },
];

function App() {
  return (
    <div className="App">
      <div className="block1">
        <div className="ad1">
          <p>Users</p>
        </div>

        <div className="ad2">
          <Download16 style={{ marginRight: "30px", opacity: "0.6" }} />
          <div className="add-btn">
            <ModalWrapper
              buttonTriggerText="Add New"
              modalHeading="Add New"
              renderTriggerButtonIcon={AddAlt16}
              size="sm"
            >
              <div style={{ marginBottom: "2rem" }}>
                <TextInput
                  data-modal-primary-focus
                  labelText="Name"
                  style={{ marginBottom: "1rem" }}
                />
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <TextInput
                  data-modal-primary-focus
                  labelText="UserName"
                  style={{ marginBottom: "1rem" }}
                />
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <RadioButtonGroup legendText="SuperUser">
                  <RadioButton labelText="Yes" value="a" />
                  <RadioButton labelText="No" value="b" />
                </RadioButtonGroup>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <RadioButtonGroup legendText="Staff">
                  <RadioButton labelText="Yes" value="c" />
                  <RadioButton labelText="No" value="d" />
                </RadioButtonGroup>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <RadioButtonGroup legendText="Active">
                  <RadioButton labelText="Yes" value="e" />
                  <RadioButton labelText="No" value="f" />
                </RadioButtonGroup>
              </div>
            </ModalWrapper>
          </div>
        </div>
      </div>

      <div className="block2">
        <Search16 />
        <input type="text" placeholder="Search" />
      </div>

      <div className="block3">
        <div>
          <div className="opt-bar">
            <p>Delete</p>
            <TrashCan16 className="tsh-16" />
          </div>

          <div className="opt-bar">
            <p>Activate</p>
            <CheckmarkFilled16 className="tsh-16" />
          </div>

          <div className="opt-bar">
            <p>Deactivate</p>
            <PauseOutlineFilled16 className="tsh-16" />
          </div>
        </div>

        <div>
          <span className="inf-bar">
            <p>3 Items Selected</p>
          </span>

          <span className="inf-bar">
            <p>Cancel</p>
          </span>
        </div>
      </div>
      <div>
        <DataTable
          rows={rowData}
          headers={headerData}
          isSortable={true}
          padding-left="0px"
        >
          {({ rows, headers, getHeaderProps, getTableProps }) => (
            <TableContainer>
              <Table {...getTableProps()} size="normal">
                <TableHead>
                  <TableRow>
                    <TableHead></TableHead>
                    {headers.map((header) => (
                      <TableHeader {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                    <TableHeader> </TableHeader>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <Checkbox id={row.id} className="rad-1" />
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                      <div className="toggle-icon">
                        <OverflowMenuHorizontal16 />
                      </div>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>
      </div>
    </div>
  );
}

export default App;
