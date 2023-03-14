import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({example: 'my@email.com', description: 'email type'})
  @IsString({message: 'must be a string'})
  @IsEmail({}, {message: 'must be email type'})
  readonly email: string;
  @ApiProperty({example: '123456', description: 'min 3 max 9 symbols'})
  @IsString({message: 'must be a string'})
  @Length(3,16, {message: 'mast have min 3 and max 16 symbols'})
  readonly password: string;
}
