import {ServerZone} from './ServerZone';

const zones:ServerZone[] = Object.values(ServerZone);
const locZoneIndex = zones.indexOf(ServerZone.LOC);

if (~locZoneIndex)
    zones.splice(locZoneIndex, 1);

export default zones;