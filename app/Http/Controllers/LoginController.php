<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

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
        $request->session()->put('token', $token);
        return response(["status"=>"sukses","data"=>$isVaid,"token"=>$token],200);
       }
        return response(["status"=>"fail","data"=>"user tidak ditemukan"],500);
    }
}
