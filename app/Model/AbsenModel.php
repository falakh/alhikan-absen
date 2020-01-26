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
        $hasil = DB::select('SELECT attedance.created_at,Cabang.name as cabang,users.name from attedance JOIN users join Cabang');
        return DB::table($this->getTable())
            ->select($this->getTable().".created_at",'users.name','cabang.name')
            ->join('users','users.id','=',$this->getTable().".cabangId")
            ->join('cabang','cabang.id','=',$this->getTable().".cabangId")->get();


    }
    protected $table = "attedance";
}
