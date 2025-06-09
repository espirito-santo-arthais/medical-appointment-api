import { Module } from '@nestjs/common';
import { DoctorModule } from './doctor/doctor.module';

@Module({
  imports: [DoctorModule],
})
export class AppModule { }
