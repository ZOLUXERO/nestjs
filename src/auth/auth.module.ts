import { Module } from '@nestjs/common';
import { AuthController } from './autn.controller';
import { AuthService } from './auth.service';
import { GrowthBookService } from 'src/growthbook/growthbook.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, GrowthBookService], // TODO: se puede sacar GrowthBookService de aca y usarlo global con @Global en el modulo como prima.module.ts
})
export class AuthModule {}
