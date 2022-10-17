'use strict';

/**
 * sem service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sem.sem');
