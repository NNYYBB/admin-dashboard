
// Database connection
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: 'admin_dashboard',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }).promise();