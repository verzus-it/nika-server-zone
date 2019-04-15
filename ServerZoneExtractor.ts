import {Security} from './Security';

export class ServerZoneExtractor {
    static extract(url:string) {
        const raw = url
            .split('.')
            .pop();

        if (!raw)
            throw new Error(`Got empty DB server zone raw.`);

        const zone = raw.replace(/[^a-z]+/, '');

        return Security.validateServerZone(zone);
    }
}