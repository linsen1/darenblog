const user = {
    name: "user",
    title: "用户表",
    type: "document",
    fields: [
        {
            name: "name",
            title: "昵称",
            type: "string",

        },
        {
            name: "email",
            title: "邮箱",
            type: "string",
        },
        {
            name:"platform_id",
            title:"平台用户标识",
            type:"string"
        }
    ],

};

export default user;
