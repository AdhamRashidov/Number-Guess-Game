import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameService {
	constructor(private readonly prisma: PrismaService) { }

	async create(userId: number) {
		// const { userId } = createGameDto;
		const randomNumber = Math.floor(Math.random() * 100) + 1;
		const newGame = await this.prisma.game.create({
			data: {
				userId,
				number: randomNumber,
			}
		});
		return newGame;
	}

	async findAll() {
		return `This action returns all game`;
	}

	async findOne(id: number) {
		return `This action returns a #${id} game`;
	}

	async update(id: number, updateGameDto: UpdateGameDto) {
		return `This action updates a #${id} game`;
	}

	async remove(id: number) {
		return `This action removes a #${id} game`;
	}
}
