<?php
// 网站名, 将会显示在您的站点的标题上面,需要配置
$GLOBALS['config']['site_name'] = 'ZhengruiTeamTODO';
// 网站IP或者域名, 自动获取, 不需要配置
$GLOBALS['config']['site_domain'] = $_SERVER['HTTP_HOST'];
// 网站HTTP地址, 可能需要配置
$GLOBALS['config']['site_url'] = 'http://' . $GLOBALS['config']['site_domain'];
// 默认的控制器, 不需要修改, 如果修改会导致程序无法运行
$GLOBALS['config']['default_controller'] = 'guest';
// 网站图标, 可以自己修改
$GLOBALS['config']['favicon'] = 'static/image/favicon.png';
// 默认头像, 可以自己修改
$GLOBALS['config']['default_avatar'] = 'static/image/user.avatar.png';
// API 服务器地址
$GLOBALS['config']['api_server'] = $GLOBALS['config']['site_url'] . '/index.php';
// 检查新版本, 暂时没有实现
$GLOBALS['config']['api_check_new_verison'] = true;
$GLOBALS['config']['at_short_name'] = true;
// 是否可以修改密码
$GLOBALS['config']['can_modify_password'] = true;
// 时区, 必须要设置正确
$GLOBALS['config']['timezone'] = 'Asia/Chongqing';
// 是否是测试版本
$GLOBALS['config']['dev_version'] = false;
// 默认语言, 目前只有zh_cn, 可以参考local文件夹
$GLOBALS['config']['default_language'] = 'zh_cn';
// Session过期时间
$GLOBALS['config']['session_time'] = 60 * 60 * 24 * 3;
// 插件路径{目前没有任何插件}
$GLOBALS['config']['plugin_path'] = AROOT . DS . 'plugin' . DS;
// 默认安装的插件
$GLOBALS['config']['plugins'] = array(
    "check_list",
    "todo_flow",
    "css_modifier",
    "simple_token",
    "basic_auth"
);