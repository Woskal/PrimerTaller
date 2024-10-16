import { Body, Controller, Get, Param, ParseIntPipe, Post , Patch, Delete, ValidationPipe} from '@nestjs/common';
import { ProductService } from './products.service';


@Controller('products')
export class ProductController {
  
 constructor(
   private readonly productService: ProductService
 ) {}

 @Get()
 getAllproducts() {
  return  this.productService.findAll()
 }

  @Get(':id')
  getProductsById( @Param('id', ParseIntPipe ) id: number) {
   console.log(id);
    return this.productService.findOneById(id);
    
  }
 
  @Post()
  createProduct(@Body() body: any) {
  return ProductService;
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: number,
    @Body() body: any) {
  return body;
  }

  @Delete(':id')
  deleteProduct( @Param('id') id: number) {
   return {
    method: 'delete',
    id
  };
 }

}

