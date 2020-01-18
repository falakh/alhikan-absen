<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class RegisterController extends Controller
{
    public function register(Request $request){
        $data=[];
        try {
            $this->validate($request, [
                'name'=> 'required',
                'email' => 'required',
                'password' => 'required'
            ]);
            $user = new User();
            $user->email = $request->email;
            $user->name = $request->name;
            $user->password = $request->password;
            $user->nidn= $request->nidn;
            $user->status = $request->status;
            $user->alamat= $request->alamat;
            if($user->save()){
                $token = JWTAuth::fromUser($user);
                $data['status']="sukses";
                $data['userid'] =  $user;
                $data['token'] = $token;
                return $data;
            }

        } catch (ValidationException $e) {
            return "";
        }
    }
}
