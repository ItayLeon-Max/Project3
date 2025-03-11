import { NextFunction, Request, Response } from "express";
import Freedom from "../../models/freedom";


export async function getAllFreedoms(req: Request, res: Response, next: NextFunction) {
    try {
        const freedoms = await Freedom.findAll();
        res.status(200).json(freedoms);
        console.log(`numbers of freedoms: ${freedoms.length}`);
    } catch (error) {
        next(error);
    }
}

export async function addFreedom(req: Request<{vacationDestination: string, description: string, start: string, end: string, price: number, imgFreedom: string}>, res: Response, next: NextFunction) {
    try {
        const { vacationDestination, description, start, end, price, imgFreedom } = req.body;
        const freedom = await Freedom.create({
            vacationDestination,
            description,
            start,
            end,
            price,
            imgFreedom
        });
        res.status(201).json(freedom);
        console.log(`freedom created: ${freedom}`);
    } catch (error) {
        next(error);
    }
}