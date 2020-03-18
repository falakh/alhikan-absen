<?php

namespace App\Http\Controllers;

use App\Model\MobileLoginModel;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\JWTAuth;

class LoginController extends Controller
{
    public function Login(Request $request){
        $credentials = $request->only('email', 'password');
        $user = new User();
        $user->email=$request->input('email');
        $user->password=$request->input('password');

        $isVaid = User::where('email',$user->email)->where("password",$user->password) -> first();
       if($isVaid){
        $token = JWTAuth::fromUser($isVaid);

        return response(["status"=>"sukses","data"=>$isVaid,"token"=>$token],200);
       }
        return response(["status"=>"fail","data"=>"user tidak ditemukan"],500);
    }

    public function LoginFromMobile(Request $request)
    {
        $credentials = $request->only('email', 'password',"deviceId");

        $email=$request->input('email',"");
        $password=$request->input('password',"");
        $deviceId=$request->input('deviceId',"");
        $loginMobile = new MobileLoginModel();
        $hasil = $loginMobile->Login($email,$password,$deviceId);
        return response()->json(
            $hasil
        );
    }
}
