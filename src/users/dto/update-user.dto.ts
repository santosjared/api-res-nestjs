import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, Length} from "class-validator"
import { HttpCode } from '@nestjs/common';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty()
    @IsNotEmpty()
    name:string
    
    @ApiProperty()
    @IsNotEmpty()
    email:string
    
    @ApiProperty()
    @IsNotEmpty()
    @Length(5,21)
    password:string
}
