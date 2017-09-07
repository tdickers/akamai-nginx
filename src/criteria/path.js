import { Criteria } from '../criteria.js';

export class CriteriaPath extends Criteria {

    constructor(options, valueMap) {
        super();
        this.options = options;
        this.valueMap = valueMap;
        this.checkVar = 'akamaiuri';
    }

    process() {
        let usePattern = true;
        return super.process(usePattern);
    }

}
Criteria.register('path', CriteriaPath);