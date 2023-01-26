import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDriverDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  firstLastName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  secondLastName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  identityNumber: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  licenseCategory: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  expirationYear: string;
}
