import config from '../../src/config.json';

const variationIt = (variations) =>
  variations.includes(config.variation) ? it : it.skip;

export default variationIt;
