import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[
      HttpClientModule,
      HttpClientTestingModule 
    ]});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
