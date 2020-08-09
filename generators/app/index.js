const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  writing() {
    const templates = [
      '.gitignore',
      'README.md',
      'babel.config.js',
      'package.json',
      'public/favicon.ico',
      'public/index.html',
      'src/App.vue',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/main.js',
    ]

    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname // 为项目生成的文件夹的名字
      }
    ])
    .then(answers => {
      this.answers = answers // 后续writing使用
    })
  }
}