import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  // The @ApiProperty decorators are required to make the class properties visible to the SwaggerModule.
  // More information about this is available in the NestJS docs.
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  body: string;

  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
