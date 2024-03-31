async function routes (fastify, options) {
    fastify.get("/", async (request, reply) => {
      return { hello: "world" }
    }),

    fastify.get("/test", async (request, reply) => {
        return { hello: "world" }
    }),

    fastify.get("/comments/:article_id", (req, reply) => {
        fastify.pg.query(
            "SELECT * FROM comments WHERE article_id=$1", [req.params.article_id],
            function onResult (err, result) {
                reply.send(err || result)
            }
        )
    })
}

export default routes;