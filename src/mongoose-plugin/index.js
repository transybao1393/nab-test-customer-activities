
let lastModifiedPlugin = (schema, options) => {
    schema.add({ lastModified: Date });

    schema.pre('save', function (next) {
        this.lastModified = new Date();
        next();
    });

    if (options && options.index) {
        schema.path('lastModified').index(options.index);
    }
};

let updatedAtPlugin = (schema, options) => {
    schema.add({ updatedAt: Date });
    schema.pre('update', function (next) {
        this.updatedAt = new Date();
        next();
    });
};

let createdAtPlugin = (schema, options) => {
    schema.add({ createdAt: Date });
    schema.pre('save', function (next) {
        this.createdAt = new Date();
        next();
    });
};

export {
    lastModifiedPlugin,
    updatedAtPlugin,
    createdAtPlugin
};