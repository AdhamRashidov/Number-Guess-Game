import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) { }

	async create(createUserDto: CreateUserDto) {
		const newUser = await this.prisma.user.create({
			data: createUserDto
		});
		return newUser;
	}

	async findAll() {
		return `This action returns all user`;
	}

	async findOne(id: number) {
		return `This action returns a #${id} user`;
	}

	async update(id: number, updateUserDto: UpdateUserDto) {
		return `This action updates a #${id} user`;
	}

	async remove(id: number) {
		return `This action removes a #${id} user`;
	}
}
