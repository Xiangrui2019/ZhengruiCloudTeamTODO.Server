<?php

// 检查是否运行在SAE环境下, BAE不支持哦
if (defined('SAE_APPNAME')) {
    // 如果运行在SAE环境下, 使用默认的配置
    // 默认的SAE配置不可修改, 如果修改会产生严重错误
    $GLOBALS['config']['db']['db_host'] = SAE_MYSQL_HOST_M;
    $GLOBALS['config']['db']['db_host_read'] = SAE_MYSQL_HOST_S;
    $GLOBALS['config']['db']['db_port'] = SAE_MYSQL_PORT;
    $GLOBALS['config']['db']['db_user'] = SAE_MYSQL_USER;
    $GLOBALS['config']['db']['db_password'] = SAE_MYSQL_PASS;
    $GLOBALS['config']['db']['db_name'] = SAE_MYSQL_DB;
} else {
    // 如果使用本地环境, 那么, 使用本地的数据库配置
    // 此套数据库配置为PHPStudy设计, 如果需要使用WAMP MAMP XAMPP 请自行更改
    $GLOBALS['config']['db']['db_host'] = 'localhost'; // 数据库地址
    $GLOBALS['config']['db']['db_port'] = 3306; // 数据库端口
    $GLOBALS['config']['db']['db_user'] = 'root'; // 数据库用户名
    $GLOBALS['config']['db']['db_password'] = 'root'; // 数据库密码
    $GLOBALS['config']['db']['db_name'] = 'publishdb'; // 数据库[需要预先创建, 不可使用mysql默认的几个数据库]
}
