'use strict';
var models = require('../models');
var UserDao = require('./userDao');
var PostDao = require('./postDao');
var TermDao = require('./termDao');
var TaxonomyDao = require('./taxonomyDao');
var CommentDao = require('./commentDao');
var OptionDao = require('./optionDao');
var sequelize = models.sequelize;
var logger = require('../utils/logger');
module.exports = {
	UserDao:UserDao,
	PostDao:PostDao,
	TermDao:TermDao,
	TaxonomyDao:TaxonomyDao,
	CommentDao:CommentDao,
	OptionDao:OptionDao,
	transaction:function() {
		logger.info('start transcation------------');
		return sequelize.transaction.apply(sequelize, arguments);
	}
};
