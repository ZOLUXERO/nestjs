import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return { msg: 'Estoy registrado' };
  }
  signin() {
    return { msg: 'Estoy logueado' };
  }
}
