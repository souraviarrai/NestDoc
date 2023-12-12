import {Controller, Get, Post, HttpCode, Header, Redirect} from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get('all')
    @Header('Cache-Control', 'non')
    @HttpCode(200)
    @Redirect('https://souravrai.netlify.app/', 301)
    findAll(): string {
        return 'This is sourav the killer';
    }
    @Post()
    @HttpCode(204)
    create(): string {
        return 'Post this';
    }
}