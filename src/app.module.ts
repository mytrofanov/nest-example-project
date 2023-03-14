import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import * as process from 'process';
import { User } from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import { UserRoles } from "./roles/user-roles.model";
import { Role } from "./roles/roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsService } from './posts/posts.service';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { Post } from "./posts/posts.model";

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [ConfigModule.forRoot({
    envFilePath: `${process.env.NODE_ENV}.env`
  }),
    SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DP,
    models: [User, Role, UserRoles, Post],
    autoLoadModels: true,
  }),
    UsersModule,
    RolesModule,
    UserRoles,
    AuthModule,
    PostsModule
  ]
})
export class AppModule {}
