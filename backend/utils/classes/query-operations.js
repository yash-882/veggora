class QueryOperations {

    constructor(filter, validFields) {
        // query string
        this.filter = filter

        // default value to show products that are in stock
        this.sortingField = filter.sort || '-inStock';

        //default values if no selection is needed
        this.select = filter.select || null;
        this.validFields = validFields //valid fields 
    }

    //converts filter fields that contain only digits (to Number)
    normalizeQueryFilters(fieldName) {
        // mongodb operators for filter, eg.greater than >,etc
        let mongoOperators = ['lt', 'lte', 'gt', 'gte'];
        //can be an object or primitive value
        let value = this.filter[fieldName];

        // if the field value is invalid
        if (value == null) {
            delete this.filter[fieldName]
            return
        }
        // checks if the field is an object or not
        let isObject = typeof value === 'object' && value != null && !Array.isArray(value);

        if (isObject) {
            // iterating over nested obj 
            Object.keys(value).forEach(op => {
                // if the operator in filter is a valid mongo operators
                const numValue = Number(value[op])


                if (mongoOperators.includes(op) && !isNaN(numValue))
                    value[op] = numValue   //converts only strings that contain only digits
                else
                    delete value[op]; //delete non-valid operators
            })

            // if no operators matched the valid operations
            if (!Object.keys(value).length)
                delete this.filter[fieldName]
        }

        else {
            // primitive values
            const numValue = Number(this.filter[fieldName])
            if (!isNaN(numValue))
                this.filter[fieldName] = numValue;

            else
                delete this.filter[fieldName]
        }
    }

    createFilter() {
        let numericFields = ['ratings', 'price'];
        let stringFields = ['category', 'name', 'description']
        
        // iterating over numeric fields
        for (let field of numericFields) {
            // if filter has any of specified numeric properties
            if (Object.hasOwn(this.filter, field))
                this.normalizeQueryFilters(field);
        }

        // checks if the filter has multiple values(array) in its fields
        for (let field of stringFields) {
            let docField = this.filter[field]

            // is array
            if (Array.isArray(docField)) {
                this.filter[field] = {
                    '$in': docField, // array field that queries any value specified in it
                }
            }
        }

        // to include $ before operators($gt, $lt, etc)

        // stringify for replacing the operators
        this.filter = JSON.stringify(this.filter)
            .replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

        // converts to JS object
        this.filter = JSON.parse(this.filter)

        return this.filter
    }

    // removes invalid document fields
    //removes methods from filter strings  like sort, limit, etc
    cleanUpQuery() {
        const mongooseMethods =['sort', 'limit', 'skip', 'populate', 'select'];
    
        // removing invalid fields
        Object.keys(this.filter).forEach(field => {
            // if key in query string doesn't contain valid document fields
            if(!this.validFields.has(field))
                delete this.filter[field]
        })

        // removing methods methods like sort, limit from filter{}
        // (because mongoose treats any key in filters{} as a field name of the document)
       for (const method of mongooseMethods) {
            if (this.filter[method])
                delete this.filter[method]
        }
    }

    createSortFields() {
        //  is sorting applied
        if (this.sortingField !== '-inStock'){
            let fieldSet = new Set(this.sortingField.split(','));

            // 'price,-name' -> 'price -name'

            // if query doesn't specify sorting 'inStock' in ascending order(means not-in-stock first)
           if(!fieldSet.has('inStock') )
           fieldSet.add('-inStock') // default when query has no sort value of inStock

        //    converting to a string for .sort()
           this.sortingField = [...fieldSet].join(' ')
}
}

    // select specific fields
    selectFields() {
        //  is selection applied
        if (this.select){
            this.select =  this.select.split(','); //converts to array
            
            // removing invalid fields
          this.select =  this.select.filter(f => 
            // keep the field if valid              //remove '-' if included
            this.validFields.has(f) || this.validFields.has(f.slice(1, f.length)))

            // 'price,-name' -> 'price -name'
            this.select = this.select.join(' ') || null;
        }    
    }
}

export default QueryOperations