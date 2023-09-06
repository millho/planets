import { dbContext } from "../db/DbContext.js"


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
}

export const planetsService = new PlanetsService