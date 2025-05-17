import './App.css';
import React, { useMemo, useCallback, useState } from 'react';
import { Table, AutoComplete, Button } from 'choerodon-ui/pro';
import DataSet from 'choerodon-ui/pro/lib/data-set';
import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';  // 添加 FieldType 导入
import { userDS } from './dataset'

function App() {
   // 使用上章 DS 配置，new DS 实例
  const tableDS = useMemo(()=> {
    return userDS;
  }, []);

  const emailOptionDS = useMemo(() => {
    return new DataSet({
      fields: [
        {
          name: 'value',
          type: FieldType.string,
        },
        {
          name: 'meaning',
          type: FieldType.string,
        },
      ],
    });
  }, []);

  const handleValueChange = useCallback((v: { target: { value: any; }; }) => {
    const { value } = v.target;
    const suffixList = ['@qq.com', '@163.com', '@hand-china.com'];
    if (value.indexOf('@') !== -1) {
    // 如果输入值中包含 @ 不配置数据，自定义输入
      emailOptionDS.loadData([]);
    } else {
      emailOptionDS.loadData(
        suffixList.map((suffix) => ({
          value: `${value}${suffix}`,
          meaning: `${value}${suffix}`,
        })),
      );
    }
  }, [emailOptionDS]);

  // 表格列配置
  const columns = useMemo(() => {
    return [
      { name: 'name', editor: true },
      { name: 'age', editor: true, sortable: true },
      { name: 'sex', editor: true },
      { 
        name: 'email', 
        editor: () => {
          return (
            <AutoComplete
              onFocus={handleValueChange}
              onInput={handleValueChange}
              options={emailOptionDS}
            />
          );
        }
      },
      { name: 'code', editor: true },
      { name: 'startDate', editor: true },
      { name: 'active', editor: true },
    ];
  }, [emailOptionDS, handleValueChange]);

  const [consoleValue, setConsoleValue] = useState('');
  const toDataButton = (
    <Button onClick={() => {
      setConsoleValue(tableDS.toData())
      console.log(consoleValue);
    }}>
      toData
    </Button>
  );
  const toJSONDataButton = (
    <Button onClick={() => {
      setConsoleValue(tableDS.toJSONData())
      console.log(consoleValue);
    }}>
      toJSONData
    </Button>
  );
  const setQueryParamButton = (
    <Button onClick={() => tableDS.setQueryParameter('customPara', 'test')}>
      setQueryParameter
    </Button>
  );
  return (
    <div style={{ width: 1200, padding: 100 }}>
      <h1>C7N Pro Table</h1>
      <Table
        queryBar="professionalBar"
        queryFieldsLimit={2}
        buttons={['add', 'query', 'save', 'delete', 'reset', toDataButton, toJSONDataButton, setQueryParamButton]}
        dataSet={tableDS}
        columns={columns}
      />
    </div>
  );
}

export default App;
