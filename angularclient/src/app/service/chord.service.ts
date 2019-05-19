import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Chord} from "../model/chord";

@Injectable({
  providedIn: 'root'
})

export class ChordService {

  private chordsUrl: string;

  constructor(private http: HttpClient) {
    this.chordsUrl = 'http://localhost:8086/data';
  }

  public findAll(): Observable<Chord[]> {
    return this.http.get<Chord[]>(this.chordsUrl);
  }

}
