import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

import { HORIZONTAL_ALIGNMENT_TYPE, FONT_AWESOME_SIZE } from '../constants';

const justifyContentTypes = Object.freeze({
  [HORIZONTAL_ALIGNMENT_TYPE.AROUND]: 'around',
  [HORIZONTAL_ALIGNMENT_TYPE.BETWEEN]: 'between',
  [HORIZONTAL_ALIGNMENT_TYPE.CENTER]: 'center',
  [HORIZONTAL_ALIGNMENT_TYPE.END]: 'end',
  [HORIZONTAL_ALIGNMENT_TYPE.START]: 'start',
});

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

  render() {
    return (
      <Container>
        <Row className={ `justify-content-${justifyContentTypes[this.props.horizontalAlignmentType]}` }>
          {
            this.getChildren()
              .map((child, index) => (
                <Col
                  key={ `${index}-contact-bar-column` }
                  xs='auto'
                >
                  {child}
                </Col>
              )
            )
          }
        </Row>
    </Container>
    );
  }
}

ContactInformation.defaultProps = {
  horizontalAlignmentType: HORIZONTAL_ALIGNMENT_TYPE.CENTER,
  size: FONT_AWESOME_SIZE.ONE,
};

ContactInformation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
  horizontalAlignmentType: PropTypes.oneOf(Object.keys(HORIZONTAL_ALIGNMENT_TYPE)),
  size: PropTypes.oneOf(Object.keys(FONT_AWESOME_SIZE)),
};

export default ContactInformation;
