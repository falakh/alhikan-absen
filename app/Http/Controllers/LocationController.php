<?php

namespace App\Http\Controllers;

use App\Cabang;
use Illuminate\Http\Request;
Use Exception;
use Illuminate\Support\Facades\DB;


class LocationController extends Controller
{
    public function findNearestCabangRequestHandler(Request $request)
    {
        return $this->GetNearestCabang($request->input("latitude"), $request->input("longitude"));
    }

    public function GetNearestCabang($latitude, $longitude)
    {
        $hasil = DB::select("select * from Cabang where jarak(cabang.latitude,cabang.longitude,$latitude,$longitude) <= cabang.radius");
        return ["cabang" => $hasil,"jumlah"=>sizeof($hasil)];
    }

     public function GetAllCabang(Request $request)
    {
        return DB::select("select * from cabang");

    }

    public function AddCabang(Request $request)
    {

//            $save = ['name' => $request->input('name')];
        try {
            $cabang = new Cabang();
            $cabang->latitude = $request->input('latitude');
            $cabang->longitude = $request->input('longitude');
            $cabang->name = $request->input('name');
            $cabang->radius = $request->input('radius');
            $cabang->addres = $request->input('addres');
            if ($cabang->save()) {
                return ['status' => "sukses", 'data' => $cabang];
            }
        } catch (Exception $excep) {
            return response(['status' => 'eror', 'message' => "$excep"], 400);
        }
    }

}
