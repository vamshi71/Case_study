import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Room } from './room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  selectedRoom: Room = new Room;
  rooms: Room[] = [];
  readonly baseURL = 'http://localhost:3000/room'

  constructor(private http : HttpClient) { }

  getRoom(roomType:any,status:any){
    return this.http.get(this.baseURL+`/${roomType}/${status}`)
  }

  getRoom1(roomType:any){
    return this.http.get(this.baseURL+`/${roomType}`)
  }

  getRoom3(){
    return this.http.get(this.baseURL)
  }

  postRoom(rom:Room){
    return this.http.post(this.baseURL,rom);
  }
  putRoom(rom:Room){
    var id=rom._id;
    return this.http.put(this.baseURL + '/'+id,rom)
  }

  deleteRoom(_id:string){
    var id=_id;
    return this.http.delete(this.baseURL + '/'+id);
  }


  
}