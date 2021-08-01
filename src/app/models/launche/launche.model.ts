export class LauncheModel {
    constructor(
        public id?: string,
        public capsules? : Array<string>,
        public payloads?: Array<string>,
        public launchpad?: string,
        public launch_library_id?: string,
        public failures?: Array<string>,
        public date_local?: string,
        public flight_number?: string,
        public date_precision?: string,
        public date_unix?: number,
        public date_utc?: string,
        public name?: string,
        public net?: boolean,
        public details?: string,
        public crew?: Array<string>,
        public rocket?: string,
        public success?: string,
        public upcoming?: string,
        public fairings?: string,
        public links?: Link
    ) {}
}

class Link {
    constructor(
        public patch? : Patch,
        public reddit? : Reddit,
        public flickr? : Flickr,
        public presstkit? : string,
        public webcast? : string,
        public youtube_id? : string,
        public article? : string,
        public wikipedia?: string
    ) {} 
}

class Patch {
    constructor(
        public small? : string,
        public large? : string
    ) {}
}

class Reddit {
    constructor(
        public campaign? : string,
        public launch? : string,
        public media? : string,
        public recovery? : string
    ) {}
}

class Flickr {
    constructor(
        public small? : Array<any>,
        public original? : Array<any>
    ) {}
}

