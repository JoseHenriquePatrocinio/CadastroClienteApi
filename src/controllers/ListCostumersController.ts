import { FastifyRequest, FastifyReply } from 'fastify'
import { ListCustomersService } from '../services/ListCustomersService'

class ListCostumersController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listCustomersService = new ListCustomersService();

        const customers = await listCustomersService.execute();

        reply.send(customers);
    }
}

export { ListCostumersController }