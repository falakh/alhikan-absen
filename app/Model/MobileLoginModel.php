<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MobileLoginModel extends Model
{
    protected $fillable = ['deviceId','user_id'];

    public function Login($username,$password,$deviceId){
        $user = new User();
        $currentUser = $user->getUserData($username,$password);
        if($currentUser){
            $id = $currentUser->id;
            $mobileUSer = MobileLoginModel::where("user_id",$id)->first();
            if(!$mobileUSer){
                $loginId = MobileLoginModel::create([
                    "deviceId"=>$deviceId,
                    "user_id"=>$id,
                ]);
                return [
                    "loginId"=>$loginId,
                    "status"=> "sukses",
                    "message"=> "sukses login berhasil"
                ];

            }else{
               return [
                "loginId" => null,
                "status"=> "failed",
                "message"=>"Akun telah login diperangkat lain"
                ];

            }
        }else{
            [
                "loginId" => null,
                "status"=> "failed",
                "message"=>"User tidak ditemukan"
                ];
        }

    }

    public function getAllData()
    {
        return DB::table("mobilelogin")
        ->join("users",'users.id','=','mobilelogin.user_id')
        ->get();
    }

    public function deleteMobileUser($idMobileUser)
    {
        $delteStatus =  DB::table("mobilelogin")
        ->where("id","=",$idMobileUser)
        ->delete();
        if($delteStatus){
            return ["status"=> "sukses"];
        }else{
            return ["status"=> "failed"];
        }
    }

    protected $table = "mobileLogin";

}
