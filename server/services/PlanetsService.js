import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class PlanetsService {
    async createPlanet(body) {
        const newPlanet = await dbContext.Planets.create(body)
        await newPlanet.populate('galaxy')
        return newPlanet
    }

    async getPlanets(query) {
        const planets = await dbContext.Planets.find(query).populate('galaxy')
        return planets
    }

    async deletePlanet(planetId) {
        const deleted = dbContext.Planets.findById(planetId)
        if (!deleted) throw new BadRequest
        await deleted.delete()
    }
}

export const planetsService = new PlanetsService