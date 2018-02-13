import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.css';

import { HORIZONTAL_ALIGNMENT_TYPE, FONT_AWESOME_SIZE } from '../constants';

const justifyContentTypes = Object.freeze({
  [HORIZONTAL_ALIGNMENT_TYPE.AROUND]: 'around',
  [HORIZONTAL_ALIGNMENT_TYPE.BETWEEN]: 'between',
  [HORIZONTAL_ALIGNMENT_TYPE.CENTER]: 'center',
  [HORIZONTAL_ALIGNMENT_TYPE.END]: 'end',
  [HORIZONTAL_ALIGNMENT_TYPE.START]: 'start',
});

const ContactInformationRow = ({ horizontalAlignmentType, contacts }) => (
  <Row className={`justify-content-${justifyContentTypes[horizontalAlignmentType]}`} >
    {
      contacts.map((contact, index) => (
        <Col key={ `${index}-contact-bar-column` } xs='auto'>
          {contact}
        </Col>
      ))
    }
  </Row>
);

class ContactInformation extends Component {
  constructor(props) {
    super(props);
  }

  getChildren() {
    const { children, size } = this.props;

    return React.Children.map((children), (child, index) => (
      React.cloneElement(child, {
        size,
        key: `${index}-contact-icon`,
        id: `${child.props.type}-${child.props.username}-${index}`,
        location: child.props.location,
        type: child.props.type,
      })
    ));
  }

  renderRows() {
    const { horizontalAlignmentType, rowLength } = this.props;

    const children = this.getChildren();

    return children.map((child, index) => {
      if (index % rowLength === 0) {
        return (
          <ContactInformationRow
            key={ `contact-information-row-${index}` }
            horizontalAlignmentType={ horizontalAlignmentType }
            contacts={ children.slice(index, index + rowLength) }
          />
        )
      }
    })
  }

  render() {
    const { children, horizontalAlignmentType, size, rowLength, className, ...other } = this.props;
    return (
      <Container
        { ...other }
        className={ classNames(className, 'contact-information') }
      >
        { this.renderRows() }
      </Container>
    );
  }
}

ContactInformationRow.defaultProps = {
  horizontalAlignmentType: HORIZONTAL_ALIGNMENT_TYPE.CENTER,
};

ContactInformation.defaultProps = {
  horizontalAlignmentType: HORIZONTAL_ALIGNMENT_TYPE.CENTER,
  size: FONT_AWESOME_SIZE.ONE,
  rowLength: 5,
  className: '',
};

ContactInformationRow.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.node).isRequired,
  horizontalAlignmentType: PropTypes.oneOf(Object.keys(HORIZONTAL_ALIGNMENT_TYPE)),
};

ContactInformation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
  horizontalAlignmentType: PropTypes.oneOf(Object.keys(HORIZONTAL_ALIGNMENT_TYPE)),
  size: PropTypes.oneOf(Object.keys(FONT_AWESOME_SIZE)),
  rowLength: PropTypes.number,
  className: PropTypes.string,
};

export default ContactInformation;
