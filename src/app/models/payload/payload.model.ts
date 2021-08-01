export class PayloadModel {
    constructor(
        public id?: string,
        public dragon?: Dragon,
        public name?: string,
        public type?: string,
        public reused? : boolean,
        public launch?: string,
        public nationalities?: Array<string>,
        public manufacturers?: Array<string>,
        public mass_kg?: string,
        public orbit?: string
    ) {}
} 

class Dragon {
    constructor(
        public capsule? : string,
        public mass_returned_kg? : string,
        public mass_returned_lbs? : string,
        public flight_time_sec? : string,
        public manifest? : string,
        public water_landing? : string,
        public land_landing?: string
    ) {}
}