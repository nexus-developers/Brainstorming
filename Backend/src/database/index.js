import Sequelize from 'sequelize';


import databaseConfig from '../config/database';

import User from '../app/models/User';
import Post from '../app/models/Post';

const connection = new Sequelize(databaseConfig);

User.init(connection);
Post.init(connection);

Post.associate(connection.models);

module.exports = connection;

