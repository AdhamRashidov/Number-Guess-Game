import { Injectable, NotFoundException } from '@nestjs/common';
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

	async makeGuess(gameId: number, value: number) {
		const game = await this.prisma.game.findUnique({
			where: { id: gameId }
		});
		if (!game) {
			throw new NotFoundException('Game not found');
		}
		let result: string;
		if (value === game.number) {
			result = 'We are victoius';
			await this.prisma.game.update({
				where: { id: gameId },
				data: { finished: true },
			});
		} else if (value < game.number) {
			result = 'kichik';
		} else {
			result = 'katta';
		}

		return this.prisma.guess.create({
			data: { gameId, value, result },
		});
	}


	async findOne(id: number) {
		const game = await this.prisma.game.findUnique({
			where: { id },
			include: { guesses: true },
		});
		if (!game) {
			throw new NotFoundException('Game not found');
		}
		return game;
	}

	async update(id: number, updateGameDto: UpdateGameDto) {
		return `This action updates a #${id} game`;
	}

	async remove(id: number) {
		return `This action removes a #${id} game`;
	}
}
