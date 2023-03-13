import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";

interface UserCreationAttribute {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttribute>{
  @ApiProperty({example: '1', description: 'unique number'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'my@email.com', description: 'email type'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: '123456', description: 'min 3 max 9 symbols'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: 'true', description: 'boolean'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({example: 'because he is stupid', description: 'reason of ban'})
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;

  // @ApiProperty({example: 'USER', description: 'role type'})
  // @Column({type: DataType.STRING, allowNull: true})
  // roles: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
