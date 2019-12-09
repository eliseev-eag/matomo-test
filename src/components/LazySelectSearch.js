import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { debounce, uniq } from 'lodash-es';
import { Select } from 'antd';

const idSelector = option => option.id;
const DEFAULT_NAME_SELECTOR = option => option.name;

const LazySelectSearch = forwardRef(
  (
    {
      allOptions,
      value,
      onChange,
      placeholder,
      count = 5,
      keySelector = idSelector,
      valueSelector = idSelector,
      nameSelector = DEFAULT_NAME_SELECTOR,
    },
    ref,
  ) => {
    const [filteredOptions, setFilteredOptions] = useState([]);
    const onSearch = useCallback(
      debounce(inputValue => {
        setFilteredOptions(
          allOptions.filter(option =>
            nameSelector(option)
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase()),
          ),
        );
      }, 300),
      [allOptions],
    );

    const onBlur = useCallback(() => {
      setFilteredOptions([]);
    }, []);

    const onChangeHandler = useCallback(
      newValue => {
        setFilteredOptions([]);
        onChange(newValue);
      },
      [onChange],
    );

    const mappedValues = useMemo(
      () => value.map(v => allOptions.find(p => valueSelector(p) === v)),
      [allOptions, value, valueSelector],
    );

    const options = useMemo(
      () =>
        filteredOptions.length
          ? filteredOptions.slice(0, count)
          : uniq([...allOptions.slice(0, count), ...mappedValues]),
      [allOptions, count, filteredOptions, mappedValues],
    );
    const hidedOptionsCount = useMemo(
      () =>
        filteredOptions.length
          ? filteredOptions.length - count
          : allOptions.length - options.length,
      [allOptions, count, filteredOptions, options.length],
    );

    return (
      <Select
        ref={ref}
        placeholder={placeholder}
        mode="multiple"
        filterOption={false}
        onSearch={onSearch}
        onChange={onChangeHandler}
        onBlur={onBlur}
        value={value}
      >
        {options.map(option => (
          <Select.Option
            key={keySelector(option)}
            value={valueSelector(option)}
          >
            {nameSelector(option)}
          </Select.Option>
        ))}
        {hidedOptionsCount > 0 && (
          <Select.Option
            key="__hidedOptionsCount__"
            value="__hidedOptionsCount__"
            disabled
          >
            Еще {hidedOptionsCount} вариантов
          </Select.Option>
        )}
      </Select>
    );
  },
);

export default LazySelectSearch;
