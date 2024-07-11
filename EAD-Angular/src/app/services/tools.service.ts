import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {


  toolsCategory: any = [
    {
      "category": "CI",
      "tools": [
        {
          "toolName": "Jenkins",
          "versions": [
            {
              "version": "v1",
              "price": 100.11
            }
          ]
        },
        {
          "toolName": "TeamCity",
          "versions": []
        },
        {
          "toolName": "CircleCI",
          "versions": [
            {
              "version": "v2",
              "price": 1000.11
            },
            {
              "version": "v3",
              "price": 1050.11
            }
          ]
        }
      ]
    }
  ]

  constructor() { }
}
