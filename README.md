# react-contact-information

## Introduction

Simple `React` component for all the ways to contact and connect across a variety of services in a world driven by the Internet of Things.

Icons driven by [`FontAwesome`](fontawesome.io/icons/); styles driven by `[Bootstrap](https://v4-alpha.getbootstrap.com) / [reactstrap](reactstrap.github.io)`.

## Example

```javascript
import { ContactInformation, Service, Email, SERVICE_TYPE, FONT_AWESOME_SIZE } from 'react-contact-information';

<ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={12} >
  <Service showIdentifier accountIdentifier='jaebradley' type={SERVICE_TYPE.GITHUB} />
  <Service showIdentifier accountIdentifier='arsenal' type={SERVICE_TYPE.INSTAGRAM} />
  <Service showIdentifier accountIdentifier='ohjoy' type={SERVICE_TYPE.PINTEREST} />
  <Service showIdentifier accountIdentifier='spez' type={SERVICE_TYPE.REDDIT} />
  <Service showIdentifier accountIdentifier='@djkhaled305' type={SERVICE_TYPE.SNAPCHAT} />
  <Email to='jae.b.bradley@gmail.com' />
</ContactInformation>
```

## API

- [`ContactInformation`](/src/ContactInformation)
- [`Email`](/src/Email)
- [`Service`](/src/Service)
- [`Constants`](/src/ConstantsREADME.md)
  - `HORIZONTAL_ALIGNMENT_TYPE`
  - `FONT_AWESOME_SIZE`
  - `SERVICE_TYPE`
  - `TARGET`
  - `TOOLTIP_PLACEMENT`