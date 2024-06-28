import { DataSource } from 'typeorm';

import { configurationFactory } from '../config/config';

// Importing Models
import { User } from '../models/user.model';

const { db } = configurationFactory();

const dataSourceFactory = new DataSource({
    type: db.type,
    host: db.host,
    port: db.port,
    database: db.database,
    username: db.username,
    password: db.password,
    entities: [User],
    synchronize: true,
    logging: false
});

export default dataSourceFactory;
