import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';
import { GuessModule } from './guess/guess.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
	imports: [UserModule, GameModule, GuessModule, PrismaModule],
})
export class AppModule { }
