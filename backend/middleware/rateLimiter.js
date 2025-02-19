import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100,
    message: "Too many requests, please try again later."
});
