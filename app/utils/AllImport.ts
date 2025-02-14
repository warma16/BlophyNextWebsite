//导入指定目录下的所有文件

import fs from 'fs'

const importAll = (path:string,arequire=(a:string)=>{return require(a)}) => {
  //在path路径里面找出所有文件名
  const files = fs.readdirSync(path)
  var res:Record<string,any>={}
  for (let i = 0; i < files.length; i++) {
      var file= files[i]
      var fileName= file.split('.')[0]
      if (fs.statSync(path + '/' + file).isDirectory()) {
          res[fileName]=arequire(path + '/' + file)
      }
  }
  return res
}

export default importAll