import React from 'react';
import { Select } from 'antd';

const ID_FACTORY = it => it.id;

const NAME_FACTORY = it => it.name;

const OPTIONS_DEFAULT_VALUE = [];

const SelectBox = ({
  options = OPTIONS_DEFAULT_VALUE,
  optionKeyFactory = ID_FACTORY,
  optionValueFactory = ID_FACTORY,
  optionNameFactory = NAME_FACTORY,
  ...otherProps
}) => (
  <Select {...otherProps}>
    {options.map(option => (
      <Select.Option
        key={optionKeyFactory(option)}
        value={optionValueFactory(option)}
      >
        {optionNameFactory(option)}
      </Select.Option>
    ))}
  </Select>
);
export default SelectBox;
