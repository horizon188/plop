module.exports = function (plop) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [{
        type: 'input',
        name: 'route',
        message: '路由地址, goodsList/detail',
        validate: (value) => {
          return !value ? '请输入路由地址' : true;
        },
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入page下的vue文件名,home/index',
        validate: (value) => {
          return !value ? '请输入page下的vue文件名' : true;
        },
      },
      {
        type: 'input',
        name: 'metaName',
        message: '路由的name值',
      },
      {
        type: 'input',
        name: 'metaTitle',
        message: '路由的title值',
      }
    ],
    actions: data => {
      const route = '{{route}}';
      const name = '{{name}}';
      const metaName = '{{metaName}}';
      const metaTitle = '{{metaTitle}}';
      console.log(data.route)
      const actions = [{
          type: 'add',
          path: 'src/pages/{{name}}.vue',
          templateFile: 'templates/components/Templatecomponent.vue'
        },
        {
          // 配置路由文件
          type: 'modify',
          path: 'src/pages/router/index.js',
          pattern: /\/\/---ROUTER_IMPORT---/,
          template: `{
      path: "/${route}", 
      name: "${metaName}",
      component: () => import("../pages/${name}"),
      meta: {
        title: "${metaTitle}"
      }
    },
    //---ROUTER_IMPORT---`,
        },
      ]
      return actions
    }


  });
};