import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let friends = [
            { id: 11, name: 'Felipe' },
            { id: 12, name: 'Camila' },
            { id: 13, name: 'Andres' },
            { id: 14, name: 'Camilo' },
            { id: 15, name: 'Tito' },
            { id: 16, name: 'Alvaro' },
            { id: 17, name: 'Jaime' },
            { id: 18, name: 'Camila' },
            { id: 19, name: 'Marta' },
            { id: 20, name: 'Pablo' }
        ];

        let parents = [{id:12,name:'Tulio'}]
        return { friends, parents };
    }
}