<?php

if( !defined('IN') ) die('bad request');

$plugin_lang = array();
$plugin_lang['zh_cn'] = array
(
	'PL_SIMPLE_TOKEN_MENU' => '永久API Token配置',
	'PL_SIMPLE_TOKEN_TITLE' => '永久API Token',
	'PL_SIMPLE_TOKEN_EXPLAIN' => '<p>永久API Token是一个永不过期的Token，通过它你可以直接用URL访问ZhengruiTeamTODO数据。</p>
<p>为保证安全，请在不使用时关闭此功能。</p>',
	'PL_SIMPLE_TOKEN_TO_ACTIVE' => '启用Token',
	'PL_SIMPLE_TOKEN_STOPPED' => 'Token %s (已停用)',
	'PL_SIMPLE_TOKEN_ACTIVE' => 'Token %s ',
	'PL_SIMPLE_TOKEN_RESET' => '重置Token',
	'PL_SIMPLE_TOKEN_STOP' => '停用Token',
	'PL_SIMPLE_TOKEN_CREATE_ERROR' => '创建失败，请稍后再试',
	'PL_SIMPLE_TOKEN_RESET_CONFIRM' => '确定要重置Token么？之前使用了接口的程序可能因此失效。',
	'PL_SIMPLE_TOKEN_TEST' => ''
);

plugin_append_lang( $plugin_lang );

// 添加顶部导航按钮
add_action( 'UI_USERMENU_BOTTOM' , 'stoken_user_menu' );
function stoken_user_menu()
{
	?><li><a href="javascript:show_float_box( '<?=__('PL_SIMPLE_TOKEN_TITLE')?>' , '?c=plugin&a=simple_token' );void(0);"><?=__('PL_SIMPLE_TOKEN_MENU')?></a></li>
	<?php 	
}


// 添加显示页面的逻辑
add_action( 'PLUGIN_SIMPLE_TOKEN' , 'plugin_simple_token');
function plugin_simple_token()
{
	$do = z(t(v('do')));

	switch( $do )
	{
		case 'create':
		case 'refresh':
			$new_token = substr( md5( uid() . time("Y h j G") . rand( 1 , 9999 ) ) , 0 , rand( 9 , 20 ) );
			$new_token = uid() . substr( md5( $new_token ) , 0 , 10 );
			$sql = "REPLACE INTO `stoken` ( `uid` , `token` , `on` ) VALUES ( '" . intval( uid() ) . "' , '" . s($new_token) . "' , '1' )";
			run_sql( $sql );
			if( db_errno() == 0 ) return ajax_echo('done');
			else return ajax_echo('error');
			break;
		
		case 'close':
			$sql = "UPDATE `stoken` SET `on` = '0' WHERE `uid` = '" . intval(uid()) .  "' LIMIT 1";
			run_sql( $sql );
			if( db_errno() == 0 ) return ajax_echo('done');
			else return ajax_echo('error');
			break;
		case 'reopen':
			$sql = "UPDATE `stoken` SET `on` = '1' WHERE `uid` = '" . intval(uid()) .  "' LIMIT 1";
			run_sql( $sql );
			if( db_errno() == 0 ) return ajax_echo('done');
			else return ajax_echo('error');
			break;
		
		default:
			$data['tinfo'] = get_line( "SELECT * FROM `stoken` WHERE `uid` = '" . intval(uid()) . "' LIMIT 1" );
	render( $data , 'ajax' , 'plugin' , 'simple_token' ); 

	}
}


// 添加API hook，完成业务逻辑
add_filter('API_LOGIN_ACTION_FILTER', 'stoken_api_login');
function stoken_api_login($data)
{
	$stoken = z(t(v('stoken')));
	if( (!in_array( g('a') , $data )) && (strlen($stoken) > 0) )
	{
		if( $uid = get_var("SELECT `uid` FROM `stoken` WHERE `token` = '" . s($stoken) . "' AND `on` = '1' LIMIT 1") )
		{
			$user = get_user_info_by_id( $uid );
			if( $user['level'] < 1 || $user['is_closed'] == 1 )
				return apiController::send_error( LR_API_USER_CLOSED , 'USER CLOSED BY ADMIN' );
			session_set_cookie_params( c('session_time') );
			@session_start();
            $token = session_id();
            // $_SESSION[ 'token' ] = $stoken; <- 加上这行stoken可以变成token
            $_SESSION[ 'uid' ] = $user[ 'id' ];
            $_SESSION[ 'uname' ] = $user['name'];
            $_SESSION[ 'email' ] = $user[ 'email' ];
			$_SESSION[ 'level' ] = $user['level'];
			$data[] = g('a');
		} 
	}

	return $data;
}

add_filter( 'API_'.g('a').'_OUTPUT_FILTER' , 'stoken_jsonp' );
function stoken_jsonp( $data )
{
	$jsonp = z(t(v('jsonp')));
	if( strlen($jsonp) > 0 )
	{
		$str = $jsonp . '(' . json_encode( $data ) . ');';
		ajax_echo( $str );
		exit;
	}
	return $data;
}
