import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { State } from "../entities/state.entity";
import { StateService } from "../services/state.service";


@Controller('states')
export class StateController {

    constructor(private readonly service:StateService){}
    @Get()
    findAll(): Promise<State[]>{
        return this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id:string): Promise<State>{
        const found =await this.service.findById(id);

        if(!found) {
            throw new HttpException('State not found', HttpStatus.NOT_FOUND);
        }
        
        return found;
    }

    @Post()
    create(@Body() State: State) :Promise<State> {
     return this.service.save(State);
    }

    @Put(':id')
    async update(@Param('id', ParseUUIDPipe) id:string,@Body() State: State): Promise<State> {
        const found = await this.service.findById(id);

        if(!found) {
            throw new HttpException('State not found', HttpStatus.NOT_FOUND);
        }
        State.id = id;
        return this.service.save(State);
    }
    
    @Delete(':id')
    async remove(@Param('id', ParseUUIDPipe) id:string): Promise<void> {
        const found = await this.service.findById(id);

        if(!found) {
            throw new HttpException('State not found', HttpStatus.NOT_FOUND);
        }
        return this.service.remove(id);
    }   
}