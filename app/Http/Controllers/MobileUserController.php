<?php

namespace App\Http\Controllers;

use App\Model\MobileLoginModel;
use Illuminate\Http\Request;

class MobileUserController extends Controller
{
    public function getAllUser(Request $request)
    {
        $mobileUSer = new MobileLoginModel();
        return response()->json(
            $mobileUSer->getAllData()
        );
    }

    public function deleteMobileUser(Request $request){
        $idUser =  $request->input("idUser");
        $mobileUSer = new MobileLoginModel();
        return response()->json(
            $mobileUSer->deleteMobileUser($idUser)
        );

    }
}
