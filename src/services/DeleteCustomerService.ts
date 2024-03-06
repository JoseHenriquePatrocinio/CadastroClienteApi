import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string;
}

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps) {

        if (!id)
            throw new Error("O id deve ser informado")
        

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if (!findCustomer) 
            throw new Error("Cliente não cadastrado")
        

        await prismaClient.customer.delete({
            where: {
                id: id
            }
        })

        return { message: `Cliente ${findCustomer.name} deletado com sucesso` }

    }
}

export { DeleteCustomerService }