import Fastify from "fastify"
import routes from "./routes.js"
import fastifyPostgres from "@fastify/postgres"

const fastify = Fastify({
  logger: true
})
console.log(process.env.POSTGRES_USER)
fastify.register(routes)

fastify.register(fastifyPostgres, {
  connectionString: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:5432/bcdb`
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: "0.0.0.0" })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()