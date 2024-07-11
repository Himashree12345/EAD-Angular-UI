import { resolve } from "path";

export const environmentLoader = new Promise<any>((resolve, reject) => {
    var xmlHttp = new XMLHttpRequest(),
    method = "GET",
    url = './assets/environments/development.json';

    xmlHttp.open(method, url, true);
    xmlHttp.onload = function () {
        if (xmlHttp.status === 200) {
            resolve(JSON.parse(xmlHttp.responseText));
        } else {
            reject('Environment configuration could not be loaded');
        }
    };
    xmlHttp.send();

});