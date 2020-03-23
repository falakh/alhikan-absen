<?php

namespace App\Http\Controllers;

use App\Model\JabatanModel;
use Illuminate\Http\Request;

class JabatanController extends Controller
{
    function addJabtan(Request $request){
        $namaJabtan = $request->input("nama","");
        $jamDatang = $request->input("jamDatang");
        $jamPulang = $request->input("jamPulang");
        $toleransiDatang = $request->input("toleransiDatang");
        $toleransiPulang = $request->input("toleransiPulang");
        $jabatanModel = new JabatanModel();
        $saved = $jabatanModel->AddJabatan($namaJabtan,$jamDatang,$jamPulang,$toleransiDatang,$toleransiPulang);
        if($saved->save()){
            return ['data'=>$saved];
        }
    }

    function  getAllJabatan(Request $request){
        return  JabatanModel::all()->unique("jabtan");

    }

    function updateJabatan(Request $request){
        $id = $request->input("id");
        $namaJabtan = $request->input("nama","");
        $jamDatang = $request->input("jamDatang");
        $jamPulang = $request->input("jamPulang");
        $toleransiDatang = $request->input("toleransiDatang");
        $toleransiPulang = $request->input("toleransiPulang");
        $jabatanModel = new JabatanModel();
        $hasil = $jabatanModel->updateJabatan($id,$namaJabtan,$jamDatang,$jamPulang,$toleransiDatang,$toleransiPulang);

        return response()->json(
           $hasil
        );



    }
}
