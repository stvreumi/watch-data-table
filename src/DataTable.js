import Table from "./Table";
import columnInfo from './columnInfo';

import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

function DataTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setTableData] = useState(null);


  // why use `useMemo`? see here: https://react-table.tanstack.com/docs/quick-start#getting-your-data
  // The docs say we don't want to recreate our data on every rerender.
  const columns = useMemo(() => columnInfo, []);
  const getTableDataAndSet = async () => {
    const res = await axios.get('/api');
    setTableData(res.data);
    setIsLoading(false);
  }

  // https://stackoverflow.com/a/57856876
  useEffect(() => {
    if (!tableData) {
      getTableDataAndSet();
    }
  });
  
  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <Table columns={columns} data={tableData} />
  );
}

export default DataTable