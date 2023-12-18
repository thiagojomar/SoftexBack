import { Request, Response } from "express";
import { Genero } from "../models/genero";
import generoRepository from "../repositories/genero.repository";


export default class GeneroController {
    async create(req: Request, res: Response) {
        if (!req.body.title) {
            res.status(400).send({
                message: "Não pode ser vazio!"
            });
            return;
        }

        try {
            const genero: Genero = req.body;
            if (!genero.published) genero.published = false;

            const savedGenero = await generoRepository.save(genero);

            res.status(201).send(savedGenero);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar salvar um genero"
            });
        }
    }

    async findAll(req: Request, res: Response) {
           
        try {
          const generos = await generoRepository.retrieveAll();
    
          res.status(200).send(generos);
        } catch (err) {
          res.status(500).send({
            message: "Some error occurred while retrieving tutorials."
          });
        }
      }
}
