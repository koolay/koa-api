## `koa-api`

koa2 api项目模板, 包含标准的配置,路由,异常处理项目结构等.

### 安装运行

```bash
  # clone the repository
  λ git clone https://github.com/koolay/koa-api.git
  # change the current directory
  λ cd koa-api
  # install all dependencies
  λ yarn install
  # run the project
  λ npm start
```

### 项目结构
```bash
├── bin                 # 启动入口
├── src                 # 程序源文件
│   ├── conf            # 配置项
│   ├── controller      # 控制器
│   ├── middleware      # 中间件
│   ├── route           # 路径
│   ├── store           # 数据访问
│   └── service         # 业务逻辑
├── .env.example        # 配置模板
└── test                # unit tests
```

### 主要使用到的库

- [Koa](https://github.com/koajs/koa) Well, duh.
- [Koa Router](https://github.com/alexmingoia/koa-router) For routing and all.
- [knex](https://github.com/tgriesser/knex) A query builder for PostgreSQL, MySQL and SQLite3, designed to be flexible, portable, and fun to use  
- [Debug](https://github.com/visionmedia/debug) Debug messages in the development environment.
- [Convict](https://github.com/mozilla/node-convict) Configuration management.
- [dotenv](https://github.com/motdotla/dotenv)
- [Joi](https://github.com/hapijs/joi) Object schema validation
- [winston](https://github.com/winstonjs/winston) a multi-transport async logging library.
- [Ava](https://github.com/avajs/ava) For unit tests.
- [Boom](https://github.com/hapijs/boom) HTTP Errors.
- [raven](https://github.com/getsentry/raven-node) log to sentry
- [Babel](https://github.com/babel/babel) Support ES6/ES7 features.
- [ESLint](https://github.com/eslint/eslint/) Linting purposes (comes with extended Airbnb's base eslint configurations).
- [Nodemon](https://github.com/remy/nodemon) Restart the server automatically (hot-reloading).

### Scripts

- `npm start` - 启动web服务
- `npm test` - 执行单元测试
- `npm run lint` - lints `src/` 目录下的所有文件
- `npm run lint:fix` - fixes all the possible linting errors
- `npm run watch` - 启动web服务,并监控源文件变化,reload

### 生产环境运行

- pm2

```bash

$ pm2 startup
$ pm2 start ecosystem.json

```

## 使用drone做持续集成