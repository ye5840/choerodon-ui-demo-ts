import './App.css';
import React, { useMemo } from 'react';
import {
  Form,
  DatePicker,
  // TextField,
  // Password,
  // NumberField,
  // EmailField,
  // UrlField,
  // SelectBox,
  Select,
  Button
} from 'choerodon-ui/pro';
import { FormDataSet } from './dataset';
import { ButtonColor } from 'choerodon-ui/pro/lib/button/enum';

function App() {

  const formDataSet = useMemo(()=> {
    return FormDataSet;
  }, []);

  return (
    <div style={{ width: 1200, padding: 100 }}>
      <h1>C7N From</h1>
      <Form dataSet={formDataSet}>
        {/* <TextField name="phone" />
        <Password name="password" />
        <Password name="confirmPassword" />
        <NumberField name="age" />
        <SelectBox name="sex" /> */}
        <Select name="language" />
        {/* <EmailField name="email" />
        <UrlField name="homePage" /> */}
        <DatePicker name="birth" />
        <div>
          <Button color={ButtonColor.primary}>注册</Button>
          <Button color={ButtonColor.default} style={{ marginRight: 8 }}>重置</Button>
        </div>
      </Form>
    </div>
  );
}

export default App;
