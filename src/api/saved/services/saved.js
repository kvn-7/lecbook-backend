'use strict';

/**
 * saved service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::saved.saved');
