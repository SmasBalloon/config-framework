const Fastify = require("fastify");

const fastify = Fastify({ logger: true });

// Route racine
fastify.get("/", async (request, reply) => {
  return { message: "Bonjour depuis Fastify!", time: new Date().toISOString() };
});

// Endpoint health
fastify.get("/health", async (request, reply) => {
  return { status: "ok", uptime: process.uptime() };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: "0.0.0.0" });
    const address = fastify.server.address();
    if (address) {
      const port = typeof address === "string" ? address : address.port;
      console.log(`Server listening on port ${port}`);
    }
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
