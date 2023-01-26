import { Injectable, Logger } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './schema/activity.schema';

@Injectable()
export class DriverService {
  private logger = new Logger(DriverService.name);

  constructor() // @InjectModel(Driver.name) private readonly driverModel: Model<Driver>,
  {}

  async create(createDriverDto: CreateDriverDto) {
    return await 'this.driverModel.create(createDriverDto)';
  }

  async findAll() {
    return await 'this.driverModel.find()';
  }

  async findOne(id: number) {
    return 'await this.driverModel.findOne({ id })';
  }

  update(id: number, updateDriverDto: UpdateDriverDto) {
    return `This action updates a #${id} driver`;
  }

  remove(id: number) {
    return `This action removes a #${id} driver`;
  }
}
