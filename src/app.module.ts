import { Module } from '@nestjs/common';
import { ProductModule } from './products/products.module';


@Module({
  imports: [ProductModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
