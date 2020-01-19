<?php

namespace App\Http\Controllers;

use App\Model\Kehadiran;
use Illuminate\Http\Request;

class Absen extends Controller
{
    function PegawaiAbsen(Request $request){
        try{
            $userId = $request->input("userId");
            $idTempat = $request->input("idTempat");
            $kehadrian = new Kehadiran();
            return $kehadrian->Absen($userId,$idTempat);

        }catch (\Exception $e){
            return $e;
        }
    }
}
