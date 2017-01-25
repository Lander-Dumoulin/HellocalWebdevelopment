import { PipeTransform, Pipe } from '@angular/core';
import { IGuide } from './guide';

@Pipe({
    name: 'guideFilter'
})
export class GuideFilterPipe implements PipeTransform {

    transform(value: IGuide[], filterBy: string): IGuide[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((guide: IGuide) =>
            guide.location.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}