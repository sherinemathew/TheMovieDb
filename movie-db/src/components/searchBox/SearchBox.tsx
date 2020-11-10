import React from 'react';
import {Row, Col, Input} from 'antd';

const { Search } = Input;

export const SearchBox = ({searchHandler}: any) => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <Search
                    placeholder="Search"
                    enterButton
                    size="large"
                    onSearch={value => searchHandler(value)}
                />
            </Col>
        </Row>
    )
}
