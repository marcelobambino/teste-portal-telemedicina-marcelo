export class HistoryModel {
    constructor(
        public id?: string,
        public links? : Link,
        public title?: string,
        public details?: string
    ) {}
}

class Link {
    constructor(
        public article? : string
    ) {} 
}
