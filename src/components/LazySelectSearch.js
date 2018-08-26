import React, { Component } from 'react';
import { Select } from 'antd';

class LazySelectSearch extends Component {
    static defaultProps = {
        count: 5,
        keySelector: option => option.id,
        valueSelector: option => option.id,
        nameSelector: option => option.name
    }

    state = {
        value: this.props.value,
        filteredOptions: []
    }

    onSearch = value => {
        const { allOptions, nameSelector } = this.props;
        const filteredOptions = allOptions.filter(
            option => nameSelector(option).toLowerCase().includes(value.toLocaleLowerCase()
            ));
        this.setState({ filteredOptions });
    }

    onChange = value => {
        debugger;
        this.setState({ filteredOptions: [], value });
        this.props.onChange(value);
    }

    render() {
        debugger;
        const { allOptions, count, keySelector, valueSelector, nameSelector, placeholder } = this.props;
        const { value, filteredOptions } = this.state;
        const options = filteredOptions.length ? filteredOptions : [...allOptions.slice(0, count), ...value];
        const hidedOptionsCount = allOptions.length - options.length;

        return (
            <Select
                placeholder={placeholder}
                mode="multiple"
                filterOption={false}
                onSearch={this.onSearch}
                onChange={this.onChange}
            >
                {options.map(option =>
                    <Select.Option
                        key={keySelector(option)}
                        value={valueSelector(option)}>
                        {nameSelector(option)}
                    </Select.Option>
                )}
                {hidedOptionsCount > 0 &&
                    <Select.Option key='__hidedOptionsCount__' value='__hidedOptionsCount__' disabled>
                        Еще {hidedOptionsCount} вариантов
                    </Select.Option>
                }
            </Select>
        );
    }
}

export { LazySelectSearch };