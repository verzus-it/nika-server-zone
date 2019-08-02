import {Security} from './Security';
import {ServerZone} from './ServerZone';

export class ServerZoneExtractor {
    static extract(url:string) {
        const raw = this.getRaw(url);

        // Some local client.
        if (!raw || raw === 'http://localhost:9009')
            return ServerZone.LOC;

        const zone = this.extractZone(raw);

        return this.validateZone(zone);
    }

    private static getRaw(url:string) {
        const raw = url
            .split('.')
            .pop();

        if (raw)
            return raw;

        throw new Error('Got empty DB server zone raw.');
    }

    private static extractZone(raw:string) {
        return raw.replace(/[^a-z]+/, '');
    }

    private static validateZone(zone:string) {
        return Security.validateServerZone(zone);
    }
}
