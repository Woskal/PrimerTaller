import { Injectable, NotFoundException } from '@nestjs/common';
@Injectable()
export class ProductService {

    private product = [
        {
         id: 1,
         name: 'mesa',
         description: 'mesa de madera',
         stock: '50',
         price: '100',
         photo: [],
         isactive: true,

        },
        {
         id: 2,
         name: 'tabla',
         description: 'tabla de madera',
         stock: '50',
         price: '100',
         photo: [],
         isactive: true,

        },
        {
         id: 3,
         name: 'silla',
         description: 'silla de madera',
         stock: '50',
         price: '100',
         photo: [],
         isactive: true,
        },
    ];

    findAll() {
        return this.product;
    }

    findOneById(id: number){
        const product = this.product.find( product => product.id === id);
        
        if (!product) throw new NotFoundException(`Product with is '${id}' not found`);
      return product;
    }
}
