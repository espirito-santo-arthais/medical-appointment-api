import { Injectable } from '@nestjs/common';
import { DoctorRepository } from '../../../domain/ports/doctor.repository';
import { Doctor } from '../../../domain/entities/doctor.entity';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class DoctorPrismaRepository implements DoctorRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(doctor: Doctor): Promise<Doctor> {
        return this.prisma.doctor.create({
            data: {
                name: doctor.name,
                email: doctor.email,
                crm: doctor.crm,
                specialtyId: doctor.specialtyId,
            },
        });
    }
}
