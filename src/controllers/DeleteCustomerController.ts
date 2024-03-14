import { FastifyRequest, FastifyReply } from 'fastify'
import { DeleteCustomerService } from '../services/DeleteCustomerService'

class DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string }

        const cutomerService = new DeleteCustomerService();

        const customer = await cutomerService.execute({ id })

        reply.send(customer);
    }
}

export { DeleteCustomerController }