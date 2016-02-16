import { PropTypes } from 'react';

const { string, object, arrayOf, shape } = PropTypes;

export default shape({
  // layer types on which filter can be placed (dropped)
  layerTypes: arrayOf(string).isRequired,
  name: string.isRequired,
  description: string,
  appearance: object,
  defaults: object,
  editor: object
});
