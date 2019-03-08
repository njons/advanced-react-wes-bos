import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';
import styled from 'styled-components';

import Title from './styles/Title'
import ItemStyles from './styles/ItemStyles'
import PriceTag from './styles/PriceTag'


// const QUERY = gql`
// `;


export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  }
  render() {
    const { item } = this.props
    return (
      <ItemStyles>
        <Title> {item.title} </Title>
        <PriceTag />
      </ItemStyles>
    )
  }
}