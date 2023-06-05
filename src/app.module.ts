import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { GrowthBookModule } from './growthbook/growthbook.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    BookmarkModule,
    GrowthBookModule,
    PrismaModule,
  ],
})
export class AppModule {}