<?php

namespace App\Model;

use Facade\FlareClient\Time\Time;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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
        return JabatanModel::all("*")
            ->where("jabtan","=",$namaJabtan)
            ->get();
    }

    function updateJabtan($id,$nama,$jamMasuk,$jamPulang,$toleransiDatang,$toleransiPulang){
       $this->id=$id;
       $this->jamMasuk=$jamMasuk;
       $this->jamPulang=$jamPulang;
       $this->toleransiDatang=$toleransiDatang;
       $this->toleransiPulang=$toleransiDatang;
       $this->save();
    }

}
