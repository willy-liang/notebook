# Mac命令

### windows命令下载文件

- 在打开的poershell窗口中，依次输入如下命令：
  `$client = new-object System.Net.WebClient` （回车）
- `$client.DownloadFile('网络文件链接地址','保存到本地后的路径+文件名')` （回车）

```cmd
start powershell
$client = new-object System.Net.WebClient 
$client.DownloadFile('http://test.com/xxx.html','D:\index.html')
```

# Linux

### **下载文件**

```
//wget -c http下载，不需要翻墙
wget -c http://test.com/zip/test.zip

//让档案自动存储到指令的目录下，需要-P参数
wget -P 目录 网址
```

### 移动命令mv

- mv(选项)(参数)  剪切，或在同目录下移动重命名
- 如果目标文件是文件夹，则源文件直接移动到该文件夹内，名字还是源文件的名字。
- .如果目标文件是文件，则源文件移动的同时也会更改名字
- 如果源文件为多个，则目标必须是目录，并且统一移动到目录下

```
#-b：当目标文件存在时，先进行备份在覆盖
mv -b a/aa b/		#ls b -->aa aa~ bb

#-f：当目标文件存在时，强制覆盖
mv -f a/aa b/	#ls b -->aa bb

-i：默认选项，当目标文件存在时，提示是否覆盖
-t：先指定目标，在制定源
-v：显示过程
```

### 删除文件

```
rm -f filename
```

### 集

```
pwd				#查看所在的路径
dir				#查看目录下的文件
cat filename	#查看文件内容
cp 被复制文件 拷贝到所在路径	#复制文件
```

# Git

- **工作区：**就是你在电脑里能看到的目录。
- **暂存区：**英文叫 stage 或 index。一般存放在 **.git** 目录下的 index 文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
- **版本库：**工作区有一个隐藏目录 **.git**，这个不算工作区，而是 Git 的版本库。

![image-20210401230906328](image/image-20210401230906328.png)

### 安装git

```
yum install git -y	#安装git
```

### 配置邮箱、用户名

配置的用户名和邮箱，邮箱不一定是真实的，但格式必须正确

```
git config --global user.name willysliang	#设置用户名
git config --global user.email willysliang@126.com	#设置用户邮箱
git config user.name	#查看用户名
git config user.email	#查看邮箱
git show 	#显示所有信息

git config --global color.ui ture	#适当的地显示颜色
```

### 创建仓库

```
mkdir demo	#创建仓库
git init	#进行初始化，需要在版本库目录中
touch file	#创建文件
```

### 文件添加到暂存区

```
git add ./abc.md	#将abc.md文件存放到暂存区
git add ./			#添加当前目录下的所有文件到暂存区
```

### 暂存区文件存放到仓库

```
git commit -m "上传说明描述内容"	#把代码放到仓库
git commit -a -m “massage”		#-a参数可将所有已跟踪文件中的执行修改或删除操作的文件都提交到本地仓库，即使它们没有经过git add添加到暂存区（一般不使用）
```

### 查看状态

```
git status	#仓库内文件的状态变化信息
git status --short	#或git status -s对status简洁输出
```

### 查看提交记录

```
git log				#查看所有提交记录
git log --oneline	#简写说明，简洁版的日志
```

### 版本回退/还原

- `HEAD`指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令`git reset --hard commit_id`。
- 穿梭前，用`git log`可以查看提交历史，以便确定要回退到哪个版本。
- 要重返未来，用`git reflog`查看命令历史，以便确定要回到未来的哪个版本。

```
git reset --hard Head~0		#获取最近的版本并覆盖，0为最新的一个
git reset --hard HEAD^		#回退上个版本
$ git reset --hard HEAD^^	#回退到上上个版本
git reset --hard 版本号	#回退到指定版本（版本号可不写全）

git reflog					#查看隐藏的版本号(即在版本回退前存在，回退后不存在的版本)
```

### 撤销修改

- 命令`git checkout -- readme.txt`即是把`readme.txt`文件在工作区的修改全部撤销.

- `git checkout -- file`    命令中没有`--`，就变成了“切换到另一个分支”的命令.

- 场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令`git checkout -- file`。

  场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令`git reset HEAD <file>`，就回到了场景1，第二步按场景1操作。

  场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交,参考版本回退，不过前提是没有推送到远程库。

- > 注意：个人发现checkout需要你本来就已经存在文件于版本库中，否则，会显示找不到该文件

```
git reset HEAD readme.txt
git checkout -- readme.txt
```

### 删除仓库文件

- 从文件夹中删除：`git rm test.txt` 
- 从版本库中删除：`git commit -m 'remove test.txt'`

### 提交代码到GitHub

- 将房间master分支里的代码上传到Github仓库中`git push 服务器地址 master`
- 从Github仓库里的master分支拿到本地`git pull 服务器地址 master`

> 注意：本地要初始化一个克隆仓库，此方法为合并数据

- 把所有的内容拿到本地`git clone 服务器地址`

> **注意：**此方法会覆盖本地的内容数据

#### 将本地代码提交远程仓库时新建一个分支

```
2.设置本地文件夹为一个Git仓库
git init

3.建立远程连接
git remote add origin +远程仓库地址

4.可能还需要下面这一步
git pull --rebase origin master

5.创建本地新分支
git branch branch_name

查看分支
git branch -a

6.切换到本地新分支
git checkout branch_name

7.此时修改了本地代码

8.提交本地代码至暂缓区、历史提交区

git add .
git commit -m "new branch first commit"

9.提交到远程新分支
 git push origin branch_name

去Gitlab查看，已经创建了一个新的分支并且代码正确提交。
```

### ssh

- 生成公钥和私钥`ssh-keygen -t rsa -C "willysliang@163.com" -f "github_id_rsa"` -->在用户主目录的`.ssh`目录里有`id_rsa`和`id_rsa.pub`两个文件，这两个是SSH Key的秘钥对，`id_rsa`是私钥，`id_rsa.pub`是公钥

- GitHub设置公钥，打开“Account settings”，“SSH Keys”页面：然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴`id_rsa.pub`文件的内容.

  ```
  #绑定好github上的ssh后，关联本地仓库（origin为远程库名，且关联必须放公钥到github账号列表上，否则推送不了数据）
  git remote add origin git@github.com:willy-liang/willy.git
  
  #把本地库的内容推送到github上
  git push -u origin master
  或 git push ssh地址 master
  ```

### 删除远程库绑定(GitHub库)

- 查看远程库信息：`git remote -v`

- 删除远程库origin：`git remote rm origin`

- 关联远程库：`git remote add origin git@server-name:path/repo-name.git`

- 第一次(只有第一次才用加`-u`)推送marster分支所有内容：`git push -u origin master`

  - > 加上了-u，git会把当前分支与远程分支进行关联(此方法只在当前目录下有效)

- > 下载到本地用`git pull`；上传到GitHub用`git push`

### 删除远程库文件

```
#1、先把github上的文件拉下来
git pull origin master

#2、删除磁盘上的文件
git rm -r --cached test.md

#3、重新提交
git commit -m "删除了test.md文件"

#4、更新远程github仓库
git push -u origin master
```

### 克隆GitHub项目到本地

- `git clone git@github.com:willy-liang/test1.git`
- git支持多种协议，包括https（速度慢、每次推送必须输入口令），但ssh协议速度最快。
- 在自己的账号下clone仓库才能有权限推送修改；别人的仓库会因无权限而没法修改。

### 分支管理

- 主分支master：要执行的代码。
- 子分支：还未写完的代码存放的分支。
- `HEAD`严格来说不是指向提交，而是指向`master`，`master`才是指向提交的，所以，`HEAD`指向的就是当前分支。

```
git branch dev		#创建dev分支
git branch			#查看分支
git checkout dev	#切换dev分支
git checkout -b dev	#创建并切换到dev分支
git checkout -u dev	#切换分支并进入子分支
git merge dev		#在主分支合并分支，把当前分支与指定的分支进行合并
git branch -d dev	#删除dev分支
```

**switch：创建与合并分支**（最新提供的命令）

- 创建并切换到新`dev`分支：`git switch -c dev`
- 直接切换到已有的`master`分支：`git switch master`

#### 合并分支概念

- `git merge`命令用于合并指定分支到当前分支。

- 每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。截止到目前，只有一条时间线，在Git里，这个分支叫主分支，即`master`分支。随着不断提交，`master`的线也会越来越长。
  当我们创建新的分支（如dev），Git新建了一个指针叫`dev`，指向`master`相同的提交，再把`HEAD`指向`dev`，就表示当前在`dev`分支上。

  Git创建分支，除了增加一个`dev`指针，改改`HEAD`的指向，工作区的文件都没有任何改变。
  当完成在`dev`上的工作后，就可以吧`dev`合并到`master`上，就是直接把`master`指向`dev`的当前提交，就完成合并了。
  合并完分支后，甚至可以删除`dev`分支。删除`dev`分支就是把`dev`指针给删掉，删掉后，就剩下一条`master`分支。·

### 解决合并分支内容的冲突

- 在多个分支中修改同一个文件，合并可能会产生冲突（Git用`<<<<<<<`，`=======`，`>>>>>>>`标记出不同分支的内容）
- 冲突解决办法：合并分支后，手动修改冲突文件的内容。
- 查看分支的合并情况：`git log --graph --pretty=oneline --abbrev-commit`
- 用`git log --graph`命令可以看到分支合并图

### 分支管理策略

通常合并分支时，如果可能，Git会用`Fast forward`模式，但这种模式下，删除分支后，会丢掉分支信息。

如果要强制禁用`Fast forward`模式，Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息。

```
#--no-ff参数，表示禁用Fast forward
git merge --no-ff -m "merge with no-ff" dev

#查看分支历史
git log --graph --pretty=oneline --abbrev-commit
```

### Bug分支

- `git stash`：把当前工作现场"储藏"，等以后恢复现场后继续工作。
- `git stash list`：查看储藏的`stash`。
- `git stash apply`：恢复`stash`的内容
- 恢复`stash`后，`stash`内容并不删除，所以需要删除
  - `git stash drop`：删除`stash`内容
  - ``git stash pop`：恢复的同时把`stash`内容也删了
- `git stash apply stash@{0}`：恢复指定的stash（有多次stash时使用）
- `git cherry-pick 4c80e2 `：复制一个特定的提交到当前分支（`3c80e2`为其他分支的提交号）

### Feature分支

- 添加一个新功能时，你肯定不希望因为一些实验性质的代码，把主分支搞乱了，所以，每添加一个新功能，最好新建一个feature分支，在上面开发，完成后，合并，最后，删除该feature分支。
- 由于feature分支上存在有未提交的操作，而git为了防止修改丢失，所以不允许删除，但是这个分支没有用了,所以需要强制删除。
- 强制删除代码：`git branch -D feature`。

### 多人协作

```
- git remote			#查看远程库的信息
- git remote -v			#显示更详细的信息
- git push origin master	#推送marster分支到远程库
- git checkout -b branch-name origin/branch-name	#建立本地分支和远程分支的关联
```

- `master`分支是主分支，因此要时刻与远程同步；
- `dev`分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；
- bug分支只用于在本地修复bug，就没必要推到远程了，除非老板要看看你每周到底修复了几个bug；
- feature分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发。

> 注意：在本地提交之前，先 pull 再 push，不然会有冲突

### 	Rebase

`git rebase`操作的特点：把分叉的提交历史"整理"成一条直线，看上去更直观。缺点是本地的分叉提交已经被修改过了。

- rebase操作可以把本地未push的分叉提交历史整理成直线；
- rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。

### 标签管理

- 打标签目的是记录该版本的发布。
- 打标签：`git tag -a 0.1.3 -m “Release version 0.1.3`
- 推送一个本地标签：`git push origin <tagname>`
- 推送全部未推送过的本地标签：`git push origin --tags`
- 删除一个本地标签：`git tag -d <tagname>`
- 删除一个远程标签：`git push origin :refs/tags/<tagname>`

```
#当次提交的标签
git add .
git commit -m “fixed some bugs”
git tag -a 0.1.3 -m “version 0.1.3″		#a指定标签名，m说明文字

#可查看历史提交的commit id
git log --pretty=oneline --abbrev-commit

#新建一个标签（默认为HEAD，也可指定一个commit id）
git tag v0.9 f52c633

#分享提交标签到远程服务器上
git push origin master
git push origin --tags
git push origin v0.9

#切换到已有Tag
git tag --list  // 查看已有tag列表
git show v0.9	//查看说明文件:git show tagname
git checkout [tag/branch/commit]  //切换到指定tag/branch/commit都是此命令

#删除本地标签
git tag -d 0.1.3

#删除远端服务器的标签（需先从本地删除才能远程删除）
git push origin :refs/tags/0.1.3
```

### 同机关联gitee与github（并行）

**1、创建ssh key**

```
# 进入用户目录下的 .ssh 文件夹下，路径会因你使用的操作系统不同而略有差异
cd ~/.ssh

# 生成 key
ssh-keygen -t rsa -C "willysliang@126.com" -f "gitee_id_rsa"
ssh-keygen -t rsa -C "willysliang@126.com" -f "github_id_rsa"

# 最终生成四个key文件
在用户主目录的.ssh目录里有id_rsa和id_rsa.pub两个文件，这两个是SSH Key的秘钥对，id_rsa是私钥，id_rsa.pub是公钥
```

**2、创建配置文件**（在.ssh文件夹中创建config文件）

```
# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitee_id_rsa

# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_id_rsa
```

**3、绑定ssh**

```
#绑定好github上的ssh后，关联本地仓库（origin为远程库名，且关联必须放公钥到github账号列表上，否则推送不了数据）
git remote add origin git@github.com:willy-liang/willy.git
git remote add gitee git@gitee.com:liangwilly/willy.git
git remote -v	#查看远程信息表
git remote -rm gitee	#删除远程库

#把本地库的内容推送到github与gitee上
git push origin master
git push gitee master
```

### error:链接Gitee的push/pull出现错误

当尝试强制上传覆盖远程文件：`git push -f  gitee master`就成功了 。

### 忽略特殊文件

**在Git工作区的根目录下创建一个特殊的`.gitignore`文件**，然后把要忽略的文件名填进去，Git就会自动忽略这些文件。

忽略文件的原则是：

1. 忽略操作系统自动生成的文件，比如缩略图等；
2. 忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如Java编译产生的`.class`文件；
3. 忽略你自己的带有敏感信息的配置文件，比如存放口令的配置文件。

````
# Windows:Windows会自动在有图片的目录下生成隐藏的缩略图文件，如果有自定义目录，目录下就会有Desktop.ini文件，因此你需要忽略Windows自动生成的垃圾文件：
Thumbs.db
ehthumbs.db
Desktop.ini

# Python，忽略Python编译产生的.pyc、.pyo、dist等文件或目录
*.py[cod]
*.so
*.egg
*.egg-info
dist
build

# My configurations:自定义
db.ini
deploy_key_rsa

# 排除所有.开头的隐藏文件:
.*
# 排除所有.class文件:
*.class

# 不排除.gitignore和App.class:
!.gitignore
!App.class
````

- 当被`.gitignore`忽略,强制添加到Git：`git add -f App.class`
- `.gitignore`规则写错检查：`git check-ignore -v App.class`

### 配置别名

- `--global`参数是全局参数，也就是这些命令在这台电脑的所有Git仓库下都有用,
- `git config --global alias.别名 原名`
- 让其显示最后一次提交信息：`git last`

```
git config --global alias.st status		#git status-->git st
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.br branch

##撤销修改：git unstage test.py-->gitreset HEAD test.py
git config --global alias.unstage 'reset HEAD'

#lg配置别名 git lg
 git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

**配置文件**

- 配置Git的时候，加上`--global`是针对当前用户起作用的，如果不加，那只针对当前的仓库起作用。
- 每个仓库的Git配置文件都放在`.git/config`文件中。
- 别名就在`.git/config`文件中的`[alias]`后面，要删除别名，直接把对应的行删掉即可。

### 搭建Git服务器

- 搭建Git服务器需要准备一台运行Linux的机器，还需要有`sudo`权限的用户账号。

1. 安装git：`sudo apt-get install git`
2. 创建一个git用户，用来运行git服务：`sudo adduser git`
3. 创建证书登录：收集所有需要登录的用户的公钥，就是他们自己的id_rsa.pub文件，把所有公钥导入到/home/git/.ssh/authorized_keys文件里，一行一个。
4. 初始化Git仓库：
   1. 先选定一个目录作为Git仓库，假定是`/srv/sample.git`，在`/srv`目录下输入命令：`sudo git init --bare sample.git`
   2. Git就会创建一个裸仓库，裸仓库没有工作区，因为服务器上的Git仓库纯粹是为了共享，所以不让用户直接登录到服务器上去改工作区，并且服务器上的Git仓库通常都以`.git`结尾。然后，把owner改为`git`：`sudo chown -R git:git sample.git`
5. 禁用shell登录：
   1. 出于安全考虑，第二步创建的git用户不允许登录shell，这可以通过编辑`/etc/passwd`文件完成。找到类似下面的一行：`git:x:1001:1001:,,,:/home/git:/bin/bash`
   2. 改为：`git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell`
   3. 这样，`git`用户可以正常通过ssh使用git，但无法登录shell，因为我们为`git`用户指定的`git-shell`每次一登录就自动退出。
6. 克隆远程仓库：`git clone git@server:/srv/sample.git`
7. 管理公钥：把每个人的公钥收集起来放到服务器的`/home/git/.ssh/authorized_keys`文件里。或用[Gitosis](https://github.com/res0nat0r/gitosis)来管理公钥
8. 管理权限：会在版本控制系统里设置一套完善的权限控制，每个人是否有读写权限会精确到每个分支甚至每个目录下。因为Git是为Linux源代码托管而开发的，所以Git也继承了开源社区的精神，不支持权限控制。不过，因为Git支持钩子（hook），所以，可以在服务器端编写一系列脚本来控制提交等操作，达到权限控制的目的。[Gitolite](https://github.com/sitaramc/gitolite)就是这个工具。

### 使用SourceTree

- 官网：[https://www.sourcetreeapp.com](https://www.sourcetreeapp.com/)
- Git有很多图形界面工具，这里我们推荐[SourceTree](https://www.sourcetreeapp.com/)，它是由[Atlassian](https://www.atlassian.com/)开发的免费Git图形界面工具，可以操作任何Git库。
- 使用SourceTree可以以图形界面操作Git，省去了敲命令的过程，对于常用的提交、分支、推送等操作来说非常方便。
- SourceTree使用Git命令执行操作，出错时，仍然需要阅读Git命令返回的错误信息。

## 安装nodejs

```cmd
#下载cnpm	(i是英文install的缩写，-g代表全局安装，-D代表本地安装。全局安装意味着安装后在任何文件夹下都能使用，而本地安装则把东西安装到指定的文件夹，当然使用也只能在这个文件夹下使用)
npm i cnpm -g	

#全局安装webpack（指定版本3.6.0，因为vue cli2依赖该版本）
npm install webpack@3.6.0 -g

#安装nrm（nrm有我们常用的镜像地址）
npm i nrm
#查看镜像地址
nrm ls
```

**npm安装报错**

```cmd
#去掉npm代理（权限问题记得加sudo）
npm config rm proxy
npm config rm https-proxy
#修改npm的资源镜像链接:
npm config set registry http://registry.npm.taobao.org
#查看是否修改成功
npm config get registry
```

```vscode-cmd
#在vscode中本地安装webpack
npm install webpack@3.6.0 -save-dev

#把main.js文件打包生成bundle.js文件
webpack .\src\main.js .\dist\bundle.js	
```

**脚手架CLI安装**

```cmd
vue --version
npm install @vue/cli -g
```

# node.js

## 配置与概论

### Node

**概念**

- node.js是一个基于Chrome V8引擎的JavaScript运行环境：
  - 不是库，是运行环境/JS语言解释器。底层源码是用C++开发的。
  - Chrome V8引擎：引擎分为渲染引擎（渲染DOM）和脚本引擎(运行脚本语言)。脚本引擎最流行的是chrome中的V8引擎。
- node.js的包管理是npm，成为世界上最大的开源代码的生态系统。
- node.js使用了一个事件驱动、非阻塞I/O的模型，使其轻量又高效。
  - 事件驱动：指在持续事务管理过程中，进行决策的一种策略，即跟随当前时间点上出现的事件，调动可用资源，执行相关任务，使不断出现的问题得以解决，防止事务堆积。
  - I/O：在服务器上可理解为读写操作，非阻塞I/O(异步I/O)。nodejs是单线程语言，其在遇到I/O事件会创建一个线程去执行，然后主线程会继续往下执行。因此，触发一个I/O事件，紧接着继续执行别的动作，再触发一个I/O事件，两个动作并行执行，假如各需要1s，那么总时间是1s。

**组成**

- nodejs是由ECMAScript及node环境提供的一些附加API组成，包括文件、http、路径等API。
- 全局对象global的方法可在任何地方使用，global可省略。
  - console.log()   //在控制台输出
  - setTimeout()   //设置超时定时器
  - clearTimeout()   /清除超时定时器
  - setInterval()   //设置间歇定时器
  - clearInterval()  //清除间歇定时器
- node应用场景：自动化构件等工具、HTTP Proxy、网站应用开发、im即时聊天(socket、io)

```bash
nvm list	#查看所有安装版本
nvm use 12.13.1		#切换指定版本
nvm uninstall 12.13.1	#卸载指定版本
```

### NPM

**概念**

- NPM是随同nodejs一起安装的包管理工具。常见使用场景：
  - 从NPM服务器下载别人编写的第三方包到本地；
  - 从NPM服务器下载并安装比人编写的命令行程序到本地；
  - 将自己编写的包或命令程序上传到NPM服务器。
- 在windows系统中，全局安装路径默认是用户node目录下的node_modules，非全局安装路径是命令运行所在路径下的node_modules下。

```bash
npm -v						#查看版本
npm install <name> --save	#安装并写入package.json
npm init -y					#初始化package.json文件，-y为默认生成
npm install <name> -f		#强制安装
npm update <name>			#更新模块
npm uninstall <name>		#卸载模块
```

**npm install去哪获取模块？**

- npm配置有仓库地址，install时都会从仓库地址中找模块。默认的仓库地址是：`https://registry.npmjs.org/`，可配置默本地默认的npm仓库下载地址：`npm config set registry http://ggjs-app-03.hnisi.com.cn:8090`

### 国内加速访问GitHub

**Windows：**

```hosts文件
 //Hosts文件位于C:\Windows\System32\drivers\etc
//1、将下面的信息添加到Hosts文件中，保存
140.82.114.3		github.com
199.232.69.194	github.global.ssl.fastly.net
151.101.192.133 raw.githubusercontent.com
```

```cmd命令
//2、更新DNS缓存
ipconfig /flushdns
```

**Linux：**

```命令行
//1、编辑Hosts文件
vi /etc/hosts
```

```vi文本
 //2、按i进入编辑模式，插入如下文本
 140.82.114.3		github.com
199.232.69.194	github.global.ssl.fastly.net
151.101.192.133 raw.githubusercontent.com

//3、按Esc键退出编辑模式，输入:wq!保存退出。
//4、重启机器或者重启服务使Hosts生效
```

**概念**

- NPM是随同nodejs一起安装的包管理工具。常见使用场景：
  - 从NPM服务器下载别人编写的第三方包到本地；
  - 从NPM服务器下载并安装比人编写的命令行程序到本地；
  - 将自己编写的包或命令程序上传到NPM服务器。
- 在windows系统中，全局安装路径默认是用户node目录下的node_modules，非全局安装路径是命令运行所在路径下的node_modules下。

```bash
npm -v						#查看版本
npm install <name> --save	#安装并写入package.json
npm init -y					#初始化package.json文件，-y为默认生成
npm install <name> -f		#强制安装
npm update <name>			#更新模块
npm uninstall <name>		#卸载模块
```

**npm install去哪获取模块？**

- npm配置有仓库地址，install时都会从仓库地址中找模块。默认的仓库地址是：`https://registry.npmjs.org/`，可配置默本地默认的npm仓库下载地址：`npm config set registry http://ggjs-app-03.hnisi.com.cn:8090`

**淘宝NPM镜像**

1. 使用淘宝镜像：`npm install -g cnpm --registry=http://registry.npm.taobao.org`
2. 安装模块：cnpm install [name]
3. 创建模块：nodejs模块就是发布到npm的代码块。
   1. 首先利用`npm init`命令创建package.json，这个过程中命令行会逐步提示你输入这个模块的信息，其中模块的名字和版本号是必填项。

### Yarn

**概念**

- Yarm是一个由Facebook、Google、exponent和tilde构建的新的JavaScript包管理器。目标是解决npm所遇的问题：安装包不够快速和稳定；因npm允许包在安装时运行代码导致存在安全隐患。
- Yarm不能完全替代npm。Yarm仅仅是一个能够从npm仓库获取模块的新的CLI客户端。
- 特点：速度超快(yarm缓存每个下载过的包，再次使用无需重复下载)；安全(在执行代码前，yarm会通过算法校检每个安装包的完整性)；可靠(使用详细、简介的锁文件格式和明确的安装算法，Yarm能保证在不同系统上无差异工作)

### NVM

```
在开发的工程中，我们可能需要经常切换node版本来应对不同的开发环境，所以需要经常使用不同版本的node

一、安装npm插件n ,通过n模块来管理node版本
1、全局安装n模块
npm instlal -g n
2、安装当前稳定版本
n stable或者sudo n stable
3、安装最新版本的
n latest或者sudo n latest
4、安装指定版本的node
n v8.16.0
5、卸载指定的node版本
n rm v8.16.0

二、使用nvm管理node版本
1、安装nvm
brew install nvm
2、使用nvm安装node版本
安装最新版本
nvm isntall node
安装指定版本
nvm install 8.16.0
3、查看所有版本
nvm ls
4、切换node版本
使用最新版本
nvm use node
使用指定版本
nvm use 10.16.2

通常我会使用第二种方式
例如：我在一个项目中使用的是node@6.13.2,新项目使用的是node@8.16.0,
先要安装node@8.16.0，nvm install 8.16.0，
然后，nvm use 8.16.0
```

