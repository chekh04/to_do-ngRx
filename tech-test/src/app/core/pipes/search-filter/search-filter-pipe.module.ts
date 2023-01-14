import { NgModule } from '@angular/core';
import { SearchFilterPipe } from '../search-filter.pipe';

@NgModule({
    exports: [
        SearchFilterPipe
    ],
    declarations: [SearchFilterPipe]
})

export class SearchFilterPipeModule {
}
