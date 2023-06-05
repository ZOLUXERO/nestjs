import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GrowthBookService } from 'src/growthbook/growthbook.service';

@Controller('auth')
export class AuthController {
  // Dependency injection in nestjs
  constructor(
    private authService: AuthService,
    private growthBookService: GrowthBookService,
  ) {}

  @Post('signup')
  signup() {
    if (this.growthBookService.isFeatureEnabled('my-feature')) {
      return this.authService.signup();
    } else {
      return 'NO FEATURE FLAG ENABLED';
    }
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
