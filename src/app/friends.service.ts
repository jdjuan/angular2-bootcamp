import { Observable, Operator } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Friend } from './friend.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'

@Injectable()
export class FriendsService {
    private friendsUrl = 'api/friends';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getFriends(): Observable<Friend[]> {
        return this.http.get(this.friendsUrl)
            .map((r: Response) => r.json().data as Friend[])
    }

    getFriendsByName(name: string): Observable<Friend[]> {
        const url = `${this.friendsUrl}?name=${name}`;
        return this.http.get(url)
            .map((r: Response) => r.json().data as Friend[])
    }

    get(id: number): Observable<Friend> {
        const url = `${this.friendsUrl}/${id}`;
        return this.http.get(url)
            .map((r: Response) => r.json().data as Friend)
    }

    delete(id: number): Observable<boolean> {
        const url = `${this.friendsUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .map((r: Response) => r.ok)
    }

    create(friend: Friend): Observable<Friend> {
        return this.http
            .post(this.friendsUrl, JSON.stringify(friend), { headers: this.headers })
            .map(res => res.json().data as Friend)
    }

    update(friend: Friend): Observable<Friend> {
        const url = `${this.friendsUrl}/${friend.id}`;
        return this.http
            .put(url, JSON.stringify(friend), { headers: this.headers })
            .map(() => friend)
    }
}