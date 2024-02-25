
export default {
    name:'article',
    type: 'document',
    title:'文章表',
    fields:[
        {
            name:'title',
            type:'string',
            title:'标题'
        },
        {
            name:'slug',
            type:'slug',
            title:'地址路径',
            options:{
                source:'title'
            }
        },
        {
            name:'coverImage',
            type:'image',
            title: '封面图片',
        },
        {
            name:'smallDescription',
            type:'text',
            title: '摘要'
        },
        {
            name:'content',
            type:'array',
            title: '内容',
            of:[
                {
                    type:'block'
                },
                {
                    type: 'image'
                },
                {
                    type: 'code'
                }

            ]
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "reference", to: [{ type: "tag" }] }],
        }
    ]
}
