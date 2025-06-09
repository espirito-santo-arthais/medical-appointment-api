import { Doctor } from '../entities/doctor.entity';

export interface DoctorRepository {
    create(doctor: Doctor): Promise<Doctor>;
}
