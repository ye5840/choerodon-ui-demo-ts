import './App.css';
import React, { useMemo } from 'react';
import { SelectDataSet } from './dataset';
import {
  Select
} from 'choerodon-ui/pro';

function App() {

  const selectDataSet = useMemo(()=> {
    return SelectDataSet;
  }, []);

  return (
    <div style={{ width: 1200, padding: 100 }}>
      <h1>C7N Select</h1>
        <Select name="sheng" dataSet={selectDataSet} />
        <Select name="shi" dataSet={selectDataSet} />
    </div>
  );
}

export default App;
