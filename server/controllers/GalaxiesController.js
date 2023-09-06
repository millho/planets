import { response } from "express";
import BaseController from "../utils/BaseController.js";
import { galaxiesService } from "../services/GalaxiesService.js";


export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .post('', this.createGalaxy)
            .get('', this.getGalaxies)
            .put('/:galaxyId', this.editGalaxy)
            .delete('/:galaxyId', this.deleteGalaxy)
    }

    async createGalaxy(req, res, next) {
        try {
            const body = req.body
            const newGalaxy = await galaxiesService.createGalaxy(body)
            res.send(newGalaxy)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxies(req, res, next) {
        try {
            const query = req.query
            const galaxies = await galaxiesService.getGalaxies(query)
            res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }

    async editGalaxy(req, res, next) {
        try {
            const updates = req.body
            const galaxyId = req.params.galaxyId
            const editedGalaxy = await galaxiesService.editGalaxy(galaxyId, updates)
            res.send(editedGalaxy)
        } catch (error) {
            next(error)
        }
    }

    async deleteGalaxy(req, res, next) {
        try {
            const galaxyId = req.params.galaxyId
            const message = await galaxiesService.deleteGalaxy(galaxyId)
            res.send(message)
        } catch (error) {
            next(error)
        }
    }
}