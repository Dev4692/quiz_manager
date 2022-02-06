import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PostDto } from './post.dto';
import { Post } from './post.model';

@Injectable()
export class PostService {
    constructor(
        @InjectModel(Post)
        private postModel: typeof Post,
    ) { }

    async createPost(postDto: PostDto): Promise<Post> {
        let post = new Post(postDto);
        await post.save();
        return post.reload();

    }
}
