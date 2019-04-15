import {ServerZone} from './ServerZone';

export class Security {
    static validateServerZone(serverZone:any):ServerZone|never {
        const zones = this.getAvailableZones();

        const isZoneAvailable = zones.includes(serverZone);

        if (!isZoneAvailable)
            throw new Error(`Got invalid DB server zone: '${serverZone}'.`);

        return serverZone;
    }

    private static getAvailableZones():ServerZone[] {
        return Object.values(ServerZone);
    }
}