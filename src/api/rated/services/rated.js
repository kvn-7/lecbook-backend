'use strict';

/**
 * rated service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rated.rated');
