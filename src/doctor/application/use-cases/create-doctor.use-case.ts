import { Doctor } from '../../domain/entities/doctor.entity';
import { DoctorRepository } from '../../domain/ports/doctor.repository';

export class CreateDoctorUseCase {
    constructor(private readonly doctorRepository: DoctorRepository) { }

    async execute(doctor: Doctor): Promise<Doctor> {
        return this.doctorRepository.create(doctor);
    }
}
