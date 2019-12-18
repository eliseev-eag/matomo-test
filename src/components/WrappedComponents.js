import React from 'react';
import { identity } from 'lodash-es';
import { Field } from 'react-final-form';
import { DatePicker, Form, Input } from 'antd';
import SelectBox from './SelectBox';
import LazySelectSearch from './LazySelectSearch';

const wrapIntoField = Component => ({ name, label, ...otherProps }) => (
  <Field name={name} format={identity} parse={identity} allowNull>
    {({ input: { value, onChange }, meta: { invalid, touched, error } }) => (
      <Form.Item
        label={label}
        validateStatus={touched && invalid ? 'error' : 'success'}
        help={error}
      >
        <Component value={value} onChange={onChange} {...otherProps} />
      </Form.Item>
    )}
  </Field>
);

const WrappedInput = wrapIntoField(Input);

const WrappedTextArea = wrapIntoField(Input.TextArea);

const WrappedDateBox = wrapIntoField(DatePicker);

const WrappedSelectBox = wrapIntoField(SelectBox);

const WrappedLazySelectSearch = wrapIntoField(LazySelectSearch);

export {
  WrappedInput as Input,
  WrappedTextArea as TextArea,
  WrappedDateBox as DateBox,
  WrappedSelectBox as SelectBox,
  WrappedLazySelectSearch as LazySelectSearch,
};
