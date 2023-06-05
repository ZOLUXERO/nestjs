import { Module } from '@nestjs/common';
import { GrowthBookService } from './growthbook.service';

@Module({
  providers: [GrowthBookService],
})
export class GrowthBookModule {}
