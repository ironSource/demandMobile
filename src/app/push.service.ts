import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';

const url = `${environment.host}/push/fake`;

@Injectable({
    providedIn: 'root'
})
export class PushService {
    id = 1;

    constructor(private http: HttpClient, private local: LocalNotifications) {}

    public pullNotifications() {
        setInterval(_ => {
            this.http.get(url).subscribe((pushMessage: any) => {
                if (pushMessage && pushMessage.title) {
                    this.local.schedule({
                        id: this.id,
                        text: pushMessage.title,
                        data: pushMessage.data
                    });
                    this.id++;
                }
            });
        }, 2000);
    }

}
