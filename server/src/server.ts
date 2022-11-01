import Fastify from 'fastify'

async function bootstrap(){
    const fastify = Fastify({
        logger: true, // enables Fastify logging
    })

    // http://localhost:3333/pools
    fastify.get('/pools/count', () => {
        return { count: 0 }
    })

    await fastify.listen({ port: 3333})
}

// starting up
bootstrap()