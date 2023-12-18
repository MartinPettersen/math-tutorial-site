const subject = {
    name: 'subject',
    title: 'Subjects',
    type: 'document',
    fields: [
        {
            name: 'subject',
            title: 'Subject',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'subject' }
        },
        {
            name: 'symbol',
            title: 'Symbol',
            type: 'string',
        },
        {
            name: 'information',
            title: 'Information',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'tests',
            title: 'Tests',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'tags',
            title: 'Tafs',
            type: 'array',
            of: [{type: 'string'}]
        }
    ]
}

export default subject;