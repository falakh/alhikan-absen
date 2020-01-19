<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


/**
 * @property integer userId
 * @property integer cabangId
 * @property
 */
class AbsenModel extends Model
{
    /*
     *
     * */
    public function  Absen($userId,$cabangId){

        $data = new AbsenModel();
        $data->userId = $userId;
        $data->cabangId = $cabangId;
        $data->save();
        return $data;
    }

    public function getAllData(){
        return DB::select('SELECT attedance.created_at,cabang.name,users.name from attedance JOIN users join cabang');
    }
    protected $table = "attedance";
}
