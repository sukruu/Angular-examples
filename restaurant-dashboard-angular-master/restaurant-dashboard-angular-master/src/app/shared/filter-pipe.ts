import { Injectable, Pipe, PipeTransform } from "@angular/core";
import { Restaurant } from "../core/models/restaurant";

@Pipe({
    name: 'filter',
    standalone: true,
    pure: false
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.id != filter.id);
    }
}