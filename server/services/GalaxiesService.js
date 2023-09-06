import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class GalaxiesService {
    async createGalaxy(body) {
        const newGalaxy = await dbContext.Galaxies.create(body)
        return newGalaxy
    }

    async getGalaxies(query) {
        const galaxies = await dbContext.Galaxies.find(query)
        return galaxies
    }

    async editGalaxy(galaxyId, updates) {
        const original = await dbContext.Galaxies.findById(galaxyId)
        if (!original) throw BadRequest
        original.name = updates.name || original.name
        original.size = updates.size || original.size
        original.age = updates.age || original.age
        await original.save()
        return original
    }

    async deleteGalaxy(galaxyId) {
        const deleted = await dbContext.Galaxies.findById(galaxyId)
        if (!deleted) throw new BadRequest
        await deleted.delete()
        return 'deleted'
    }
}

export const galaxiesService = new GalaxiesService