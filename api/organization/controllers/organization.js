'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async first(ctx) {
    const entity = await strapi.query('organization').find({ _limit: 1 });
    return sanitizeEntity(!!entity.length ? entity[0] : 'No organization found!', { model: strapi.models.organization });
  },
};

