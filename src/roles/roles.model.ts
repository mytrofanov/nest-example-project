import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";
import { UserRoles } from "./user-roles.model";

interface RolesCreationAttribute {
  value: string;
  description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RolesCreationAttribute>{
  @ApiProperty({example: '1', description: 'unique number'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'ADMIN', description: 'role type'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: string;

  @ApiProperty({example: 'he cab be admin', description: 'description of the role'})
  @Column({type: DataType.STRING, allowNull: false})
  description: string;

  @BelongsToMany(()=> User, ()=> UserRoles)
  Users: User[];
}
