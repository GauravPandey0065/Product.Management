import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // Limit each IP to 100 requests per hour
  message: "Too many requests, please try again later."
});

export default limiter;
