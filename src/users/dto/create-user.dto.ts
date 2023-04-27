import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, Length} from "class-validator"



export class CreateUserDto {
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
