import { Request, Response } from 'express';
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: "NodeJS",
        educator: "Diana",
        duration: 10
    });

    CreateCourseService.execute({
        name: "ReactJS",
        educator: "Diego",
        //duration: 7 ;se nao passado valor, sera printado o valor default 8
    });

    return response.send();
}