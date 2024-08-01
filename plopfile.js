module.exports = function (plop) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'routeUrl',
        message: '路由配置-路由地址,例如：goodsList/detail',
        validate: (value) => {
          return !value ? '请输入路由地址' : true;
        },
      },
      {
        type: 'input',
        name: 'routeName',
        message: '路由配置-路由的name值',
      },
      {
        type: 'input',
        name: 'routeTitle',
        message: '路由配置-路由的title值',
      },
      {
        type: 'input',
        name: 'filePath',
        message: '请输入文件名,例如：home/index',
        validate: (value) => {
          return !value ? '请输入page下的vue文件名' : true;
        },
      },
    ],
    actions: (data) => {
      const routeUrl = '{{routeUrl}}';
      const filePath = '{{filePath}}';
      const routeName = '{{routeName}}';
      const routeTitle = '{{routeTitle}}';
      console.log(data.routeUrl);
      const actions = [
        {
          type: 'add',
          path: 'src/pages/{{name}}.vue',
          templateFile: 'templates/components/Templatecomponent.vue',
        },
        {
          // 配置路由文件
          type: 'modify',
          path: 'src/pages/router/index.js',
          pattern: /\/\/---ROUTER_IMPORT---/,
          template: `{
      path: "/${routeUrl}", 
      name: "${routeName}",
      component: () => import("../pages/${filePath}"),
      meta: {
        title: "${routeTitle}"
      }
    },
    //---ROUTER_IMPORT---`,
        },
      ];
      return actions;
    },
  });
};
