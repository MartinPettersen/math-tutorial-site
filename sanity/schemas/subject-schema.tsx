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
            name: "image",
            title: "Image",
            type: "image",
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: "alt",
                title: "Alt",
                type: 'string'
              },
            ],
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
            title: 'Tags',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'test',
            title: 'Test',
            type: 'object',
            fields: [
                { 
                    name: 'options',
                    title: 'Options',
                    type: 'array',
                    of: [{type: 'string'}]
                    
                },
                { 
                    name: 'testDescription',
                    title: 'Test Description',
                    type: 'string',
                },
                { 
                    name: 'correctAnswer',
                    title: 'Correct Answer',
                    type: 'array',
                    of: [
                        {
                            title: 'Answer',
                            type: 'object',
                            fields: [
                                { 
                                    name: 'options',
                                    title: 'Options',
                                    type: 'array',
                                    of: [{type: 'string'}]
                                    
                                },
                            ]
                          }
                    ]
                    
                },
            ]
        },
    ]
}

/*
options: [
      { id: "operator-1", content: "+" },
            correctAnswer: string[][]

options: Option[],
    columns: Column[],
    taskDescription: string,
    columnOrder: string[]
    correctAnswer: string[][]

*/


export default subject;