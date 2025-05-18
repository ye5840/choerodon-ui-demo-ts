import { DataSet } from 'choerodon-ui/pro';
import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';  // 添加 FieldType 导入

export const userDS = new DataSet({
    // 指定 DataSet 初始化后自动查询
    autoQuery: true,
    // 请求分页大小
    pageSize: 8,
    // 主键字段名，一般用作级联行表的查询字段
    primaryKey: 'id',
    // 对应后端接口，自动生成约定的 submitUrl, queryUrl...
    name: 'user',
    // 数据对象名，默认值 'rows'
    dataKey: 'content',
    queryFields: [
      {
        name: 'name',
        type: FieldType.string,
        label: '姓名',
      },
      {
        name: 'age',
        type: FieldType.number,
        label: '年龄',
        max: 100,
        step: 1,
      },
      {
        name: 'email',
        type: FieldType.string,
        label: '邮箱',
        help: '用户邮箱，可以自动补全',
      }
    ],
    // DataSet 中包含的字段，对应上述后端数据中每条记录中的字段
    fields: [
        { name: 'id', type: FieldType.number },
        { name: 'name', type: FieldType.string, label: '姓名', help: '主键，区分用户', required: true, },
        { name: 'code', type: FieldType.string, label: '编码' },
        {
          name: 'sex', 
          type: FieldType.string, 
          label: '性别', 
          lookupUrl: 'https://hzero-test.open.hand-china.com/mock/EMPLOYEE_GENDER',
          lookupAxiosConfig: {  // 添加lookupAxiosConfig配置
            method: 'GET'
          },
          computedProps: {
            required: ({ record }) => record.get('age') > 18,
          }
        },
        { name: 'active', label: '状态', type: FieldType.boolean },
        {
          name: 'age',
          type: FieldType.number,
          label: '年龄',
          max: 100,
          min: 1,
          step: 1,
          help: '用户年龄，可以排序'
        },
        {
          name: 'email',
          type: FieldType.email,
          label: '邮箱',
          help: '用户邮箱，可以自动补全',
        },
        {
          name: 'startDate',
          type: FieldType.date,
          label: '加入日期',
        }
    ],
    // 接口自定义配置
    transport: {
        // 查询请求的 axios 配置或 url 字符串
        read: {
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'GET',
        }
    },
    // DS 事件回调
    events: {
        load: ({ dataSet }) => {
            console.log('加载完成', dataSet)
        }
    }
})

export const sexOptionDataSet = new DataSet({
  fields: [
    { name: 'text', type: FieldType.string },
    { name: 'value', type: FieldType.string },
  ],
  data: [{
    text: '男',
    value: 'male',
  }, {
    text: '女',
    value: 'female',
  }],
});

export const languageOptionDataSet = new DataSet({
  fields: [
    { name: 'text', type: FieldType.string },
    { name: 'value', type: FieldType.string }
  ],
  data: [{
    text: '简体中文',
    value: 'zh-cn',
  }, {
    text: '英语（美国）',
    value: 'en-us',
  }, {
    text: 'japanese',
    value: 'ja-jp',
  }],
});

export const FormDataSet = new DataSet({
    autoCreate: true,
    fields: [
      { name: 'phone', type: FieldType.string, label: '手机号' },
      { name: 'password', type: FieldType.string, label: '密码' },
      { name: 'confirmPassword', type: FieldType.string, label: '确认密码' },
      { name: 'age', type: FieldType.number, label: '年龄' },
      { name: 'sex', type: FieldType.string, label: '性别', textField: 'text', valueField: 'value', options: sexOptionDataSet },
      { name: 'language', type: FieldType.string, label: '语言', textField: 'text', valueField: 'value', options: languageOptionDataSet },
      { name: 'email', type: FieldType.string, label: '邮箱' },
      { name: 'homePage', type: FieldType.string, label: '个人主页' },
      { name: 'birth', type: FieldType.date, label: '生日' },
    ],
    transport: {
      create: {
        url: 'v1/projects/${projectId}',
        method: 'POST',
      }
    },
    events: {
      load: ({ dataSet }) => {
        console.log('加载完成', dataSet)
      }
    }
});

export const shengOptionDataSet = new DataSet({
  fields: [
    { name: 'meaning', type: FieldType.string },
    { name: 'value', type: FieldType.string }
  ],
  data: [
    {
      codeValueId: 10206, // 选中父级后所匹配的codeValueId
      meaning: '北京',
      value: 'BJ',
    },
    {
      codeValueId: 10207,
      meaning: '上海',
      value: 'SH',
    },
  ],
});

export const shiOptionDataSet = new DataSet({
  fields: [
    { name: 'meaning', type: FieldType.string },
    { name: 'value', type: FieldType.string }
  ],
  data: [
    {
      codeValueId: 10204,
      meaning: '青浦区',
      value: 'QP',
      parentCodeValueId: 10207, // 父级选中所对应的id信息，作为查询参数进行筛选
      parentCodeValue: 'SH', // 此处的查询条件可理解为：选出满足 parentCodeId === 选中的父级选中的 codeValueId 的子级数据进行展示
    },
    {
      codeValueId: 10205,
      meaning: '徐汇区',
      value: 'XH',
      parentCodeValueId: 10207,
      parentCodeValue: 'SH',
    },
    {
      codeValueId: 10208,
      meaning: '海定区',
      value: 'HD',
      parentCodeValueId: 10206,
      parentCodeValue: 'BJ',
    },
    {
      codeValueId: 10209,
      meaning: '朝阳区',
      value: 'CY',
      parentCodeValueId: 10206,
      parentCodeValue: 'BJ',
    },
  ],
});
export const SelectDataSet = new DataSet({
  autoCreate: true,
  fields: [
    {
      name: 'sheng',
      label: '省',
      valueField: 'codeValueId',
      defaultValue: '10206',
      options: shengOptionDataSet
    },
    {
      name: 'shi',
      type: 'number',
      valueField: 'codeValueId',
      label: '市',
      // lookupCode: 'SHI',
      // lookupUrl: 'https://hzero-test.open.hand-china.com/mock/SHI',
      // lookupAxiosConfig: { // 添加lookupAxiosConfig配置
      //   method: 'POST'
      // },
      cascadeMap: { parentCodeValueId: 'sheng' },
      options: shiOptionDataSet
    },
  ],
})