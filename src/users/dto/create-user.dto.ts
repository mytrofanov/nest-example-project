import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({example: 'my@email.com', description: 'email type'})
  readonly email: string;
  @ApiProperty({example: '123456', description: 'min 3 max 9 symbols'})
  readonly password: string;
}
