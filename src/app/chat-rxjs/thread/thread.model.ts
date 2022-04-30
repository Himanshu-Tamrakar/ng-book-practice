import { uuid } from "../util/uuid";

export class Thread {
    id: string;
    lastMessage: any;
    name: string;
    avatarSrc: string;

    constructor(id?: string, 
                name?: string, 
                avatarSrc?: string) {

        this.id = id || uuid();
        this.name = name || '';
        this.avatarSrc = avatarSrc || '';
    }
}
