# ContactInformation

## Props

### `horizontalAlignmentType` (`HORIZONTAL_ALIGNMENT_TYPE`; optional)

Specifies how the contact information should be formatted. Should use the `HORIZONTAL_ALIGNMENT_TYPE` constant, which mirrors [all the different `Bootstrap` alignment specifications](https://v4-alpha.getbootstrap.com/layout/grid/#horizontal-alignment). Defaults to `HORIZONTAL_ALIGNMENT_TYPE.CENTER`.

### `size` (`FONT_AWESOME_SIZE`; optional)`

Specifies the size of the `FontAwesome` icons. Should use the `FONT_AWESOME_SIZE` constant, which mirrors [all the different `FontAwesome` size values](https://fontawesome.com/how-to-use/svg-with-js). Defaults to `FONT_AWESOME_SIZE.ONE`.

### `rowLength` (number: optional)

Specifies the number of icons per row. Defaults to `5`.

### `children` (`Service | Email`; required)

`ContactInformation` should be used in conjunction with with `Service` and `Email` components.

## Example

```javascript
<ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={6}>
  <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.ANGELLIST} />
  <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.GITHUB}/>
  <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.FACEBOOK} />
  <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.TWITTER} />
  <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.CODEPEN} />
  <Email to='jae.b.bradley@gmail.com' />
</ContactInformation>
```
