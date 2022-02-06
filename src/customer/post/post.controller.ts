import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostDto } from './post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private postService: PostService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async createPost(@Body() postDto: PostDto) {
        return await this.postService.createPost(postDto);
    }
}
