import { FilterEnum } from '../../core/enums/filter.enum';

export interface FiltersState {
  category: string;
  taskType: FilterEnum;
}

export const initialFiltersState: FiltersState = {
  category: null,
  taskType: FilterEnum.all
};
