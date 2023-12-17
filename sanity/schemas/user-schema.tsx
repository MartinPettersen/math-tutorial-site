const user = {
    name: 'user',
    title: 'Users',
    type: 'document',
    fields: [
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'email' }
        },
        {
            name: 'achievments',
            title: 'achievments',
            type: 'array',
            of: [{type: 'string'}]
        }
    ]
}

export default user;