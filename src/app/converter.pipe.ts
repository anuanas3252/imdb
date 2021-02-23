import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'converter'
})
export class ConverterPipe implements PipeTransform {

    k = 1000;
    m = 1000000;
    b = 1000000000;
    con: string;

    transform(value: any) {
        if (value < 100000) {
            this.con = (value / this.k).toPrecision(3);
            return this.con + ' K';
        }
        if (value >= 100000 && value < 1000000000) {
            this.con = (value / this.m).toPrecision(3);
            return this.con + ' M';
        }

        if (value > 1000000000) {
            this.con = (value / this.b).toPrecision(3);
            return this.con + ' B';
        }

    }
}