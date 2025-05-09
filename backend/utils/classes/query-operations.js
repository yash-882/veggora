class QueryOperations {

    constructor(query) {
        this.query = query;
    }

    //converts query fields that contain only digits (to Number)
    normalizeQueryFilters(fieldName) {
        // mongodb operators for query, eg.greater than >,etc
        let mongoOperators = ['lt', 'lte', 'gt', 'gte'];
        //can be an object or primitive value
        let value = this.query[fieldName];

        // checks if the field is an object or not
        let isObject = typeof value === 'object' && value != null && !Array.isArray(value);

        if (isObject) {
            // iterating over nested obj 
            Object.keys(value).forEach(op => {
                // if the operator in query is a valid mongo operators
                const numValue = Number(value[op])


                if (mongoOperators.includes(op) && !isNaN(numValue))
                    value[op] = numValue   //converts only strings that contain only digits
                else
                    delete value[op]; //delete non-valid operators
            })

            // if no operators matched the valid operations
            if (!Object.keys(value).length)
                delete this.query[fieldName]


        }

        else {
            // primitive values
            const numValue = Number(this.query[fieldName])
            if (!isNaN(numValue))
                this.query[fieldName] = numValue;

            else
                delete this.query[fieldName] 
        }
    }

    createFilter() {
        let numericFields = ['reviews', 'price'];
        let stringFields = ['category', 'name', 'description']
        this.query = Object.assign({}, this.query)

        // iterating over numeric fields
        for (let field of numericFields) {
            // if query has any of specified numeric properties
            if (Object.hasOwn(this.query, field))
                this.normalizeQueryFilters(field);
        }

        // checks if the query has multiple values(array) in its fields
        for (let field of stringFields) {
            let docField = this.query[field]

            // is array
            if (Array.isArray(docField)) {
                this.query[field] = {
                    '$in': docField, // array field that queries any value specified in it
                }
            }
        }


        // to include $ before operators($gt, $lt, etc)

        // stringify for replacing the operators
        this.query = JSON.stringify(this.query)
            .replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

        // converts to JS object
        this.query = JSON.parse(this.query)

        return this.query
    }
}

export default QueryOperations