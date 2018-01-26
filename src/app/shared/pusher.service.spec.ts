import { TestBed, inject } from '@angular/core/testing';

import { PusherService } from './pusher.service';
import {AuthService} from "../auth/auth.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Router} from "@angular/router";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module"

describe('PusherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PusherService,
        AuthService,
        HttpClient,
        HttpHandler,
        {provide: Router, useClass: AppRoutingModule},
      ]
    });
  });

  it('should be created', inject([PusherService], (service: PusherService) => {
    expect(service).toBeTruthy();
  }));
});
