// In-memory counter (resets when the server restarts)
let requestCount = 0;

// Middleware function to count requests
const requestCounter = (req, res, next) => {
  requestCount++;
  console.log(`Total Requests: ${requestCount}`); // Logs the count for tracking
  next();
};

// Function to get the current count (optional, for displaying in a route)
const getRequestCount = () => requestCount;

module.exports = { requestCounter, getRequestCount };
