import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DoctorController } from './presentation/http/controllers/doctor.controller';
import { CreateDoctorUseCase } from './application/use-cases/create-doctor.use-case';
import { DoctorPrismaRepository } from './infrastructure/database/repositories/doctor.prisma.repository';

@Module({
    controllers: [DoctorController],
    providers: [
        PrismaService,
        DoctorPrismaRepository,
        {
            provide: CreateDoctorUseCase,
            useFactory: (repo: DoctorPrismaRepository) =>
                new CreateDoctorUseCase(repo),
            inject: [DoctorPrismaRepository],
        },
    ],
})
export class DoctorModule { }
