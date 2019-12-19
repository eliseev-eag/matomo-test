import React from 'react';
import { identity } from 'lodash-es';
import { Field } from 'react-final-form';
import { Form, Input } from 'antd';
import DateBox from './DateBox';
import SelectBox from './SelectBox';
import LazySelectSearch from './LazySelectSearch';

const wrapIntoField = Component => ({
  name,
  label,
  validate,
  allowNull = true,
  format = identity,
  parse = identity,
  ...otherProps
}) => (
  <Field
    name={name}
    format={format}
    parse={parse}
    allowNull={allowNull}
    validate={validate}
  >
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

const WrappedDateBox = wrapIntoField(DateBox);

const WrappedSelectBox = wrapIntoField(SelectBox);

const WrappedLazySelectSearch = wrapIntoField(LazySelectSearch);

export {
  WrappedInput as Input,
  WrappedTextArea as TextArea,
  WrappedDateBox as DateBox,
  WrappedSelectBox as SelectBox,
  WrappedLazySelectSearch as LazySelectSearch,
};
