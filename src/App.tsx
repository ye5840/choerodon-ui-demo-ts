import React from 'react'
import { Lov } from 'choerodon-ui/pro';
import DataSet from 'choerodon-ui/pro/lib/data-set';
import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';
import { configure } from 'choerodon-ui';

export default function App() {
  // const lovDefineTemple = {
  //   code: 'LOV_CODE', // lovCode 值
  //   description: '快码',
  //   lovItems: [
  //     {
  //       display: '代码', // 表格列列头显示的名称
  //       gridFieldName: 'code', // 表格列的 key 和 name
  //       gridFieldWidth: 300,	// 列默认宽度
  //       gridFieldAlign: 'left', // 列文字对齐方式
  //       gridField: 'Y', // 是否为视图配置信息
  //       gridFieldSequence: 1, // 列序号
  //     },
  //     {
  //       display: '描述',
  //       gridFieldName: 'description',
  //       gridFieldWidth: 300,
  //       gridFieldAlign: 'left',
  //       gridField: 'Y',
  //       gridFieldSequence: 2,
  //     },
  //   ], // 表格列信息
  //   placeholder: '请选择快码', // Lov 输入框 placeholder 
  //   title: '父级快码', // Lov 弹出框标题
  //   textField: 'description', // 显示字段
  //   valueField: 'code', // 值字段
  //   width: 710, // 表格宽度
  //   lovPageSize: '10', // Lov 弹出框默认页数
  // };

  // const ds = new DataSet({
  //   autoCreate: true,
  //   fields: [
  //     {
  //       name: 'code',
  //       ...lovDefineTemple
  //     }
  //   ]
  // })
  // const ds = new DataSet({
  //   autoCreate: true,
  //   fields: [
  //     {
  //       name: 'code',
  //       textField: 'code',
  //       type: FieldType.object,
  //       lovCode: 'LOV_CODE',
  //       lovDefineUrl: code => `/test_define/lov/lov_define?code=${code}`, // 视图配置接口自定义
  //       lovQueryUrl: code => `/test_query/lov/dataset/${code}`, // 查询数据接口自定义
  //     },
  //   ],
  // });
  configure({
    // 配置 axios config 配置，批量请求接口为 GET 类型，接口地址后面拼接上批量视图配置查询的 lovCode
    lovDefineBatchAxiosConfig: (codes) => {
      return {
        url: 'https://hzero-test.open.hand-china.com/mock/lov-views/batch2',
        method: 'GET',
        params: codes.reduce((obj, val) => {
          obj[val] = val;
          return obj;
        }, {}),
      };
    },
    // 可通过 lovCode 和 field 字段信息判断是否进行批量视图配置查询
    useLovDefineBatch: (lovCode, field) => {
      return true;
    },
  });
  
  return (
    <Lov dataSet={ds} />
  )
}
