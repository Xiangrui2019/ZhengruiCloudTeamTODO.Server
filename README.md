# ZhengruiCloudTeamTODO.Server
一个团队使用的TODO小工具. 开源. 可以直接在LAMP环境下部署.

### 环境要求
1. PHP5.* [7.* 不可以, 因为MySQL操作函数不正常]

### 如何开发
在开发之前, 您需要安装以下依赖:
* Git
* PHP 5.*

我们强烈推荐使用VSCode或者WebStorm来开发这个项目
用Visual Studio Code直接打开目录。

### 如何运行
#### 如何使用PHP自带的Web服务器运行?
首先配置`config/db.config.php`文件

`php -S localhost:4000`

#### 如何使用PHPStudy运行?
`cp ./* PHPStudyWWW目录`

#### 使用脚本运行
`./start.sh`

### 如何发布
`./publish.sh`

### 如何贡献
有很多方法可以为项目做出贡献：记录错误，提交PullRequest，ReportError和创建issues
即使您对存储库具有推送权限，也应该创建个人分支并在需要时创建功能分支。这使主存储库保持清洁，并且您的个人工作流程不可见.