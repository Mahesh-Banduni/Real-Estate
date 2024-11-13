const cluster = require('cluster');
const os = require('os');
const logger = require('../configs/winston.config.js');
const process = require('process');

// Cluster configuration and worker management
module.exports = () => {
  if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    logger.info(`Master ${process.pid} is running with ${numCPUs} CPU cores`);

    // Fork workers for each CPU core
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    // Event listener for worker exit to respawn workers
    cluster.on('exit', (worker, code, signal) => {
      logger.warn(`Worker ${worker.process.pid} died. Code: ${code}, Signal: ${signal}`);
      cluster.fork(); // Fork a new worker to maintain the desired number of workers
    });

    // Handle master process signals for graceful shutdown
    process.on('SIGINT', () => {
      logger.info('SIGINT received. Shutting down gracefully...');
      for (const id in cluster.workers) {
        cluster.workers[id].kill(); // Send SIGTERM to workers
      }
    });

    process.on('SIGTERM', () => {
      logger.info('SIGTERM received. Shutting down gracefully...');
      for (const id in cluster.workers) {
        cluster.workers[id].kill(); // Send SIGTERM to workers
      }
    });
  } else {
    // Worker process logic: Start the Express app for each worker
    require('../app.js'); // Import the Express app, worker will run the server
  }
};
