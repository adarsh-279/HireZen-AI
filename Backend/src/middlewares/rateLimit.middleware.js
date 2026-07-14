const userRequestTimestamps = new Map();

function userRateLimiter(options = {}) {
  const windowMs = options.windowMs ?? 60 * 1000; // default 1 minute
  const maxRequests = options.maxRequests ?? 1;

  return (req, res, next) => {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    const userId = req.user.id.toString();
    const now = Date.now();
    const entry = userRequestTimestamps.get(userId);

    if (entry) {
      const elapsed = now - entry.timestamp;
      if (elapsed < windowMs) {
        return res.status(429).json({
          message: `Rate limit exceeded: only ${maxRequests} request(s) per ${windowMs / 1000} second(s) allowed.`,
          retryAfter: Math.ceil((windowMs - elapsed) / 1000),
        });
      }
    }

    userRequestTimestamps.set(userId, { timestamp: now, count: 1 });

    // Cleanup old entries periodically to avoid memory growth
    if (userRequestTimestamps.size > 1000) {
      const cutoff = now - windowMs * 2;
      for (const [key, value] of userRequestTimestamps.entries()) {
        if (value.timestamp < cutoff) {
          userRequestTimestamps.delete(key);
        }
      }
    }

    next();
  };
}

export default userRateLimiter;
