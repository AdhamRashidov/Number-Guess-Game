import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';


@Controller('game')
export class GameController {
	constructor(private readonly gameService: GameService) { }

	@Post('start/:id')
	create(@Param('id', ParseIntPipe) userId: number) {
		return this.gameService.create(userId);
	}

	@Post('guess/:id')
	inputGuess(
		@Param('id', ParseIntPipe) gameId: number,
		@Body('value', ParseIntPipe) value: number,
	) {
		return this.gameService.makeGuess(gameId, value);
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.gameService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
		return this.gameService.update(+id, updateGameDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.gameService.remove(+id);
	}
}
