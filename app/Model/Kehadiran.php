<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;


/**
 * @property integer userId
 * @property integer cabangId
 * @property
 */
class Kehadiran extends Model
{
    /*
     *
     * */
    public function  Absen($userId,$cabangId){

        $data = new Kehadiran();
        $data->userId = $userId;
        $data->cabangId = $cabangId;
        $data->save();
        return $data;
    }
    protected $table = "attedance";
}
