
export default {
    name: "tag",
    title: "标签表",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Tag Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
            },
        },
        {
            name:"color",
            title: "颜色",
            type:"string",
        },
        {
            name:"colorValue",
            title: "颜色值",
            type:"string",
        }
    ],
}
