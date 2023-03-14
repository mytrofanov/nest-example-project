import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";

interface PostCreationAttribute {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttribute>{
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @Column({type: DataType.STRING, defaultValue: false})
  content: string;

  @Column({type: DataType.STRING, defaultValue: false})
  image: string;

  @ForeignKey(()=> User)
  @Column({type: DataType.INTEGER})
  userId: number

  @BelongsTo(()=> User)
  author: User;
}
