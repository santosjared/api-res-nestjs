import { CreateUserDto } from '../dto/create-user.dto';

export const messageError = ()=>{
    if(!CreateUserDto.name)
    {
        throw new Error('este campo es requerido')
    }
}
