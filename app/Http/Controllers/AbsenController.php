<?php

namespace App\Http\Controllers;

use App\Model\AbsenModel;
use Illuminate\Http\Request;

class AbsenController extends Controller
{
    function PegawaiAbsen(Request $request){
        try{
            $userId = $request->input("userId");
            $idTempat = $request->input("idTempat");
            $kehadrian = new AbsenModel();
            return $kehadrian->Absen($userId,$idTempat);

        }catch (\Exception $e){
            return $e;
        }
    }

    function getAllData(Request $request){
        $absen =  new AbsenModel();
        return json_encode($absen->getAllData());
    }
}
