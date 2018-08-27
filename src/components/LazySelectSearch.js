import React, { Component } from "react";
import { uniq, debounce } from "lodash-es";
import { Select } from "antd";

class LazySelectSearch extends Component {
  static defaultProps = {
    count: 5,
    keySelector: option => option.id,
    valueSelector: option => option.id,
    nameSelector: option => option.name
  };

  static getDerivedStateFromProps(props) {
    return { value: props.value };
  }

  state = {
    value: this.props.value,
    filteredOptions: []
  };

  onSearch = debounce(value => {
    const { allOptions, nameSelector } = this.props;
    const filteredOptions = allOptions.filter(option =>
      nameSelector(option)
        .toLowerCase()
        .includes(value.toLocaleLowerCase())
    );
    this.setState({ filteredOptions });
  }, 300);

  onBlur = () => {
    this.setState({ filteredOptions: [] });
  };

  onChange = value => {
    this.setState({ filteredOptions: [], value });
    this.props.onChange(value);
  };

  render() {
    const {
      allOptions,
      count,
      keySelector,
      valueSelector,
      nameSelector,
      placeholder
    } = this.props;
    const { value = [], filteredOptions } = this.state;
    const mappedValues = value.map(v =>
      allOptions.find(p => valueSelector(p) === v)
    );
    const options = filteredOptions.length
      ? filteredOptions.slice(0, count)
      : uniq([...allOptions.slice(0, count), ...mappedValues]);
    const hidedOptionsCount = filteredOptions.length
      ? filteredOptions.length - count
      : allOptions.length - options.length;

    return (
      <Select
        placeholder={placeholder}
        mode="multiple"
        filterOption={false}
        onSearch={this.onSearch}
        onChange={this.onChange}
        onBlur={this.onBlur}
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
  }
}

export { LazySelectSearch };
