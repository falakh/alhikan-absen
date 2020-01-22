<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDistanceFormula extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->down();
        $sql = ("
CREATE  FUNCTION `jarak`(
        lat1 FLOAT, lon1 FLOAT,
        lat2 FLOAT, lon2 FLOAT
     ) RETURNS FLOAT
    NO SQL
    DETERMINISTIC
BEGIN
    RETURN  DEGREES(
    ATAN2(
      SQRT(
        POW(COS(RADIANS(lat2))*SIN(RADIANS(lon2-lon1)),2) +
        POW(COS(RADIANS(lat1))*SIN(RADIANS(lat2)) -
             (SIN(RADIANS(lat1))*COS(RADIANS(lat2)) *
              COS(RADIANS(lon2-lon1))) ,2)),
      SIN(RADIANS(lat1))*SIN(RADIANS(lat2)) +
      COS(RADIANS(lat1))*COS(RADIANS(lat2))
        *COS(RADIANS(lon2-lon1))))*111 ;
END
");
        DB::connection()->getPdo()->exec($sql);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

        $sql = ("DROP FUNCTION IF EXISTS jarak;");
        DB::connection()->getPdo()->exec($sql);
    }
}
