
const book ={
    name:"book",
    title:"留言表",
    type: "document",
    fields: [
        {
            name: "nickname",
            title: "昵称",
            type: "string",
        },
        {
            name: "userID",
            title: "用户标识",
            type: "string",
        },
        {
            name: "content",
            title: "留言内容",
            type: "string",
        },
        {
            name:"article_id",
            title:"文章id",
            type:"string"
        }
    ]
}

export default book;
