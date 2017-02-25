import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SpinnerService {
    private spinnerServiceSource = new Subject<string>();

    constructor() {
    }

    getSpinnerService() {
        return this.spinnerServiceSource.asObservable();
    }

    informSpinnerService(value: boolean) {
        this.spinnerServiceSource.next(value);
    }
}