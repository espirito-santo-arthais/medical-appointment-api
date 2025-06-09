import { Body, Controller, Post } from '@nestjs/common';
import { CreateDoctorUseCase } from '../../../application/use-cases/create-doctor.use-case';
import { Doctor } from '../../../domain/entities/doctor.entity';

@Controller('doctors')
export class DoctorController {
    constructor(private readonly createDoctorUseCase: CreateDoctorUseCase) { }

    @Post()
    async create(@Body() doctor: Doctor): Promise<Doctor> {
        return this.createDoctorUseCase.execute(doctor);
    }
}
