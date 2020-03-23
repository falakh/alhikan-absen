<?php

namespace App\Model;

use Facade\FlareClient\Time\Time;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\This;

/**
 * @property integer id
 * @property string jabtan
 * @property string jamMasuk
 * @property string jamPulang
 * @property string toleransiDatang
 * @property string toleransiPulang
 */
class JabatanModel extends Model
{
    protected $table = "jabatan";

    function AddJabatan($nama,$jamMasuk,$jamPulang,$toleransiDatang,$toleransiPulang){
        $data = new JabatanModel();
        $data->jabtan = $nama;
        $data->jamMasuk=$jamMasuk;
        $data->jamPulang=$jamPulang;
        $data->toleransiDatang=$toleransiDatang;
        $data->toleransiPulang=$toleransiPulang;
        return $data;
    }

    function getJabatanData($namaJabtan){
        return JabatanModel::where("jabtan","=",$namaJabtan)->get();
    }

    function updateJabatan($id,$nama,$jamMasuk,$jamPulang,$toleransiDatang,$toleransiPulang){
        $targetJabatan = JabatanModel::find($id);
       $targetJabatan->jamMasuk=$jamMasuk;
       $targetJabatan->jamPulang=$jamPulang;
       $targetJabatan->jabtan=$nama;
       $targetJabatan->toleransiDatang=$toleransiDatang;
       $targetJabatan->toleransiPulang=$toleransiPulang;
        $hasil = $targetJabatan->save();
        $targetJabatan = JabatanModel::find($id);
        if($hasil){
            return ["status"=> "sukses","message"=>"data berhasil diubah","data"=>$targetJabatan];
        }
        return ["status"=> "failed","message"=>"data gagal diubah","data"=>null];
    }

}
