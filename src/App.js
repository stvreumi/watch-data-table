import React from "react";
import styled from "styled-components";

import DataTable from './DataTable';
import Statusbar from './Statusbar';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function App() {
  return (
    <Styles>
      <Statusbar />
      <DataTable />
    </Styles>
  );
}

export default App;
