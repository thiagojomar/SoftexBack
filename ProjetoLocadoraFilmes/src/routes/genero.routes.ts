import { Router, Request, Response } from "express";
import GeneroController from "../controllers/genero.controller";
//import { welcome } from "../controllers/home.controller";

class GeneroRoutes {
  router = Router();
  controller = new GeneroController();

  constructor() {
    this.intializeRoutes();
  }
  
  intializeRoutes() {

    //Create novo Genero
    this.router.post("/genero", this.controller.create);

    //Retornar os Generos ja cadastrados
    this.router.get("/generos", this.controller.findAll);
   
  }
}

export default new GeneroRoutes().router;