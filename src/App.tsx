import './App.css';
import React, { useMemo } from 'react';
import { Table } from 'choerodon-ui/pro';
import { userDS } from './dataset'

function App() {
   // 使用上章 DS 配置，new DS 实例
  const tableDS = useMemo(()=> {
    return userDS;
  }, []);

  // 表格列配置
  const columns = useMemo(()=>{
    return [
      { name: 'name', editor: true },
      { name: 'age', editor: true },
      { name: 'sex', editor: true },
      { name: 'email', editor:true },
      { name: 'code', editor: true },
      { name: 'startDate', editor: true },
      { name: 'active', editor: true },
    ];
  }, []);
  return (
    <div style={{ width: 1200, padding: 100 }}>
      <h1>C7N Pro Table</h1>
      <Table
        dataSet={tableDS}
        columns={columns}
      />
    </div>
  );
}

export default App;
