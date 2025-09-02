import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { CityService } from "../services/city.service";
import { City } from "../entities/city.entity";


@Controller('cities')
export class CityController {

    constructor(private readonly service:CityService){}
    @Get()
    findAll(): Promise<City[]>{
        return this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id:string): Promise<City>{
        const found =await this.service.findById(id);

        if(!found) {
            throw new HttpException('city not found', HttpStatus.NOT_FOUND);
        }
        
        return found;
    }

    @Post()
    create(@Body() City: City) :Promise<City> {
     return this.service.save(City);
    }

    @Put(':id')
    async update(@Param('id', ParseUUIDPipe) id:string,@Body() city: City): Promise<City> {
        const found = await this.service.findById(id);

        if(!found) {
            throw new HttpException('city not found', HttpStatus.NOT_FOUND);
        }
        city.id = id;
        return this.service.save(city);
    }
    
    @Delete(':id')
    async remove(@Param('id', ParseUUIDPipe) id:string): Promise<void> {
        const found = await this.service.findById(id);

        if(!found) {
            throw new HttpException('city not found', HttpStatus.NOT_FOUND);
        }
        return this.service.remove(id);
    }   
}