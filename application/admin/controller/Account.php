<?php

namespace app\admin\controller;


/**
 * Class Login 用户模块
 * @package app\admin\controller
 */
class Account extends Base
{

    /**
     * 首页
     */
    public function login(){


        return $this->view->fetch('login',[
            'title'     =>      '登录'
        ]);
    }
}
